import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import path = require('path');
import { NotificationService } from './notification.service';
import { PrismaService } from './prisma.service';
import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { NotificationResolver } from './notification.resolver';
import { User } from './users_connection/user.model';
import { UsersResolver } from './users_connection/user.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers, EventHandlers, QueryHandlers, NotificationsSaga } from './cqrs';
@Module({
  imports: [
    CqrsModule,
    ClientsModule.register([
      {
        name: process.env.KAFKA_SERVICE_NAME,
        transport: Transport?.KAFKA,
        options: {
          client: {
            clientId: process.env.KAFKA_CLIENT_ID,
            brokers: [`${process.env.KAFKA_BROKER_HOST}:${process.env.KAFKA_BROKER_PORT}`],
          },
          consumer: {
            groupId: process.env.KAFKA_CONSUMER_GROUP_ID,
          }
        },
      },
    ]),
  GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: path.join(__dirname, '/schema.gql'),
      buildSchemaOptions: {
        orphanedTypes: [User]
      }
    }),
  ],
  providers: [
    PrismaService,
    NotificationService,
    NotificationResolver,
    UsersResolver,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,

    NotificationsSaga
  ],
})
export class NotificationModule {}
