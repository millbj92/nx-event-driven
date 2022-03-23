import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    CqrsModule,
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport?.KAFKA,
        options: {
          client: {
            clientId: 'auth-service',
            brokers: [`${process.env.KAFKA_BROKER_HOST}:${process.env.KAFKA_BROKER_PORT}`],
          },
          consumer: {
            groupId: 'auth-consumer',
          }
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
