import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsGateway } from './notifications.gateway';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NOTIFICATION_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'notification-service',
            brokers: [
              `${process.env.KAFKA_BROKER_HOST}:${process.env.KAFKA_BROKER_PORT}`,
            ],
          },
          consumer: {
            groupId: 'notification-service-consumer-client',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, NotificationsGateway],
})
export class AppModule {}
