import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';
import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import path = require('path');
import { User } from './users_connection/user.model';
import { UsersResolver } from './users_connection/user.resolver';
import { ClientsModule, Transport} from '@nestjs/microservices';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers, QueryHandlers, EventHandlers, MessagesSaga } from './cqrs';

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
    MessageService,
     MessageResolver,
     UsersResolver,

     ...CommandHandlers,
     ...QueryHandlers,
     ...EventHandlers,
     MessagesSaga
    ],
})
export class MessageModule{}
