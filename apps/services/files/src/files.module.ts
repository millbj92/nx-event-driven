import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import {Module} from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import path = require('path');
import { FileResolver } from './file.resolver';
import { FileService } from './file.service';
import { Post } from './posts_connection/post.model';
import { PostResolver } from './posts_connection/post.resolver';
import { PrismaService } from './prisma.service';
import { User } from './users_connection/user.model';
import { UsersResolver } from './users_connection/user.resolver';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateFileCommandHandler, DeleteFileCommandHandler, UpdateFileCommandHandler } from './cqrs/commands/impl';
import { AllFilesQueryHandler, OneFileQueryHandler } from './cqrs/queries/impl';
import { FileCreatedHandler, FileDeletedHandler, FileUpdatedHandler } from './cqrs/event_handlers';
import { ClientsModule, Transport } from '@nestjs/microservices';

const CommandHandlers = [
  CreateFileCommandHandler,
  UpdateFileCommandHandler,
  DeleteFileCommandHandler,
]

const QueryHandlers = [
  AllFilesQueryHandler,
  OneFileQueryHandler,
]

const EventHandlers = [
  FileCreatedHandler,
  FileDeletedHandler,
  FileUpdatedHandler
]

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
            groupId: 'file-consumer',
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
          Post
        ]
      }
    }),
  ],
  providers: [
    FileResolver,
    FileService,
   PrismaService,
   UsersResolver,
   PostResolver,
   ...CommandHandlers,
   ...QueryHandlers,
   ...EventHandlers
  ],
  exports: [
    CqrsModule,
    FileService,
  ]
})
export class FilesModule{

}
