import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import path = require('path');
import { MessageModule } from './message.module';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { PrismaService } from './prisma.service';
import { MessageService } from './message.service';
import { MessagesGateway } from './src/messages.gateway';

@Module({
  imports: [MessageModule],
  controllers: [],
  providers: [MessagesGateway],
})
export class AppModule {}
