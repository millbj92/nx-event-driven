import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import path = require('path');
import { MessageModule } from './message.module';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { PrismaService } from './prisma.service';
import { MessageService } from './message.service';

@Module({
  imports: [
  MessageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
