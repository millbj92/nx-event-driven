import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';

import { PostsModule } from './../posts/posts.module';
import { UsersModule } from './../users/users.module';
import { AppService } from './app.service';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    ConfigModule.forRoot(),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secretOrPrivateKey: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: '7d',
        },
      }),
      inject: [ConfigService],
    }),
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
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
