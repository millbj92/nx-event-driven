import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import path = require('path');
import { ApolloFederationDriverConfig , ApolloFederationDriver} from '@nestjs/apollo';
import { UserService } from './user.service';
import { PrismaService } from './prisma.service';
import { UserResolver } from './user.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers, QueryHandlers, EventHandlers, UsersSaga } from './cqrs';
@Module({
  imports: [
    CqrsModule,
    ClientsModule.register([
      {
        name: process.env.KAFKA_SERVICE_NAME,
        transport: Transport.KAFKA,
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
    }),
  ],
  controllers: [],
  providers: [
    UserService,
     UserResolver,
     PrismaService,

     ...CommandHandlers,
      ...QueryHandlers,
      ...EventHandlers,
      UsersSaga
    ],
})
export class UserModule {}
