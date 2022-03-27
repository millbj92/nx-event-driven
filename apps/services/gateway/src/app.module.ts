import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway';
import { Logger, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriverConfig, ApolloGatewayDriver } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { SharedModule } from '@super-rad-poc/services/shared';


const GATEWAY_BUILD_SERVICE  = 'GATEWAY_BUILD_SERVICE';

class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  async willSendRequest({ request, context }) {
    //Logger.log("AuthenticatedDataSource.willSendRequest", GATEWAY_BUILD_SERVICE);
    //Logger.log("request: " + JSON.stringify(request), GATEWAY_BUILD_SERVICE);
    Logger.log('context: ' + JSON.stringify(context.headers), GATEWAY_BUILD_SERVICE);
    request.http.headers.set('Authorization', context.headers && context.headers.authorization ? context.headers.authorization : 'Bearer ');
  }
};

@Module({
  imports: [],
  providers: [
    {
      provide: AuthenticatedDataSource,
      useValue: AuthenticatedDataSource,
    },
    {
      provide: GATEWAY_BUILD_SERVICE,
      useFactory: (AuthenticatedDataSource) => {
        return ({ name, url }) => new AuthenticatedDataSource({ url });
      },
      inject: [AuthenticatedDataSource],
    },
  ],
  exports: [GATEWAY_BUILD_SERVICE],
})
class BuildServiceModule {}

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      useFactory: async () => ({
         server: {
          playground: false,
          plugins: [ApolloServerPluginLandingPageLocalDefault],
          cors: {
            origin: '*',
            credentials: true,
          },
          context: ({ req }) => {
            console.log(req.headers.authorization);
            return {
              headers: req.headers,
            };
          }
         },
         gateway: {
          buildService: ({ name, url }) => new AuthenticatedDataSource({ url }),
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
              // {
              //   name: 'notifications',
              //   url:
              //     process.env.NOTIFICATIONS_URL ||
              //     'http://localhost:5004/graphql',
              // },
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
      imports: [BuildServiceModule],
      inject: [GATEWAY_BUILD_SERVICE],
    }),
  ],
  controllers: [],
})
export class AppModule {}