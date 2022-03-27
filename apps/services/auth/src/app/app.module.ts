import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrismaService } from './prisma.service';
import { CommandHandlers, EventHandlers, AuthSaga} from './cqrs';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './tasks.service';


@Module({
  imports: [
    ScheduleModule.forRoot(),
    CqrsModule,
    ClientsModule.register([
      {
        name: process.env.KAFKA_SERVICE_NAME,
        transport: Transport?.KAFKA,
        options: {
          client: {
            clientId: process.env.KAFKA_CLIENT_ID,
            brokers: [`${process.env.KAFKA_BROKER_HOST}:${process.env.KAFKA_BROKER_PORT}`],
          },
          consumer: {
            groupId: process.env.KAFKA_CONSUMER_GROUP_ID,
          }
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    TasksService,
    PrismaService,
    ...CommandHandlers,
    ...EventHandlers,
    AuthSaga,
  ],
})
export class AppModule {}
