import  {Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql';
import path = require('path');
import { PostService } from './post.service';
import { PrismaService } from './prisma.service';
import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { PostResolver } from './post.resolver';
import { User } from './users_connection/user.model';
import { UsersResolver } from './users_connection/user.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers, QueryHandlers, EventHandlers, PostsSaga } from './cqrs';
import {  JwtGuard, JwtStrategy, SharedModule } from '@super-rad-poc/services/shared';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
@Module({
  providers: [
    ConfigService,
    PostService,
    PrismaService,
    PostResolver,
    UsersResolver,
    ...CommandHandlers,
    ...QueryHandlers,
    ...EventHandlers,
    PostsSaga
  ],
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
      },
      context: ({ req }) => {
        Logger.log(JSON.stringify(req.headers), "PostModule");
        return {
          req
        };
      }
    }),
  ]
})
export class PostModule {}
