import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import path = require('path');
import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { TagService } from './tag.service';
import { PrismaService } from './prisma.service';
import { TagResolver } from './tag.resolver';
import { Comment } from './comment_connection/comment.model';
import { Post } from './post_connection/post.model';
import { User } from './users_connection/user.model';
import { PostsResolver } from './post_connection/post.resolver';
import { UsersResolver } from './users_connection/user.resolver';
import { CommentResolver } from './comment_connection/comment.resolver';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CommandHandlers, QueryHandlers, EventHandlers, TagsSaga } from './cqrs';

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
          Comment
        ]
      }
    }),
  ],
  controllers: [],
  providers: [
    PrismaService,
    TagService,
    TagResolver,
    PostsResolver,
    UsersResolver,
    CommentResolver,

    ...CommandHandlers,
    ...QueryHandlers,
    ...EventHandlers,

    TagsSaga
  ],
})
export class TagModule {}
