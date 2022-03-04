import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';

import { PostsModule } from './../posts/posts.module';
import { UsersModule } from './../users/users.module';
import { AppService } from './app.service';
import { AuthController } from './auth.controller';
import { PostsController } from './posts.controller';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      include: [UsersModule, PostsModule],
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      cors: {
        origin: '*',
      },
    }),
  ],
  controllers: [AuthController, PostsController],
  providers: [AppService],
})
export class AppModule {}
