import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ComplexityPlugin } from './plugins/complexity.plugin';
import { ThrottlerModule } from '@nestjs/throttler';
import { RateLimitingProvider } from './providers/rate-limiting-provider';
import { GraphQLSchemaHost, GraphQLModule } from '@nestjs/graphql';
@Module({
  imports: [
    ConfigModule,
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: config.get('THROTTLE_TTL'),
        limit: config.get('THROTTLE_LIMIT'),
      }),
    }),
  ],
  providers: [
    ConfigService,
    RateLimitingProvider
  ],
  exports: [
    ConfigModule,
    ThrottlerModule,
    RateLimitingProvider
  ],
})
export class SharedModule {}
