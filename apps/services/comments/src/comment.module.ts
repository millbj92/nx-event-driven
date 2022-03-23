import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';
import { PrismaService } from './prisma.service';
import {  ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';
import { User } from './users_connection/user.model';
import { Post } from './post_connection/post.model';
import { PostResolver } from './post_connection/post.resolver';
import { UsersResolver } from './users_connection/user.resolver';
import { CqrsModule } from '@nestjs/cqrs';
import {
  CommandHandlers,
  QueryHandlers,
  EventHandlers,
  CommentsSaga
} from './cqrs';
import { ClientsModule, Transport} from '@nestjs/microservices';



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
          orphanedTypes: [
            User,
            Post,
          ]
        }
    })
  ],
  providers: [
    ...EventHandlers,
    CommentResolver,
     CommentService,
      PrismaService,
      PostResolver,
      UsersResolver,
      ...QueryHandlers,
      ...CommandHandlers,
      CommentsSaga
    ],
  exports: [
    CqrsModule,
    CommentService,
  ]
})
export class CommentModule {}
