import { IntrospectAndCompose } from '@apollo/gateway';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriverConfig, ApolloGatewayDriver } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { SharedModule } from '@super-rad-poc/services/shared';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {
        playground: false,
        plugins: [ApolloServerPluginLandingPageLocalDefault],
        cors: {
          origin: '*',
          credentials: true,
        },
      },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            {
              name: 'comments',
              url: process.env.COMMENTS_URL || 'http://localhost:5000/graphql',
            },
            {
              name: 'files',
              url: process.env.FILES_URL || 'http://localhost:5001/graphql',
            },
            {
              name: 'messages',
              url: process.env.MESSAGES_URL || 'http://localhost:5002/graphql',
            },
            {
              name: 'notifications',
              url:
                process.env.NOTIFICATIONS_URL ||
                'http://localhost:5004/graphql',
            },
            {
              name: 'posts',
              url: process.env.POSTS_URL || 'http://localhost:5005/graphql',
            },
            {
              name: 'tags',
              url: process.env.TAGS_URL || 'http://localhost:5006/graphql',
            },
            {
              name: 'users',
              url: process.env.USERS_URL || 'http://localhost:5007/graphql',
            },
          ],
        }),
      },
    }), 
   
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
