import { CqrsModule } from '@nestjs/cqrs';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { pubSubProvider, PUB_SUB, RateLimitingProvider} from './providers';
import { PrismaService } from './prisma.service';
import { PubSub } from 'graphql-subscriptions';
import { ThrottlerModule } from '@nestjs/throttler';


@Module({
  imports: [
    CqrsModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
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
    PrismaService,
    pubSubProvider,
    {
      provide: PUB_SUB,
      useValue: new PubSub(),
    },
    ConfigService,
    RateLimitingProvider
  ],
  exports: [
    PrismaService,
    pubSubProvider,
    {
      provide: PUB_SUB,
      useValue: new PubSub(),
    },
    CqrsModule,
    ConfigModule,
    ThrottlerModule,
    RateLimitingProvider,
  ],
})
export class SharedModule {}
