import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrismaService } from './prisma.service';
import { CommandHandlers, EventHandlers, AuthSaga} from './cqrs';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './tasks.service';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    TerminusModule,
    CqrsModule,
    ScheduleModule.forRoot(),
    ClientsModule.register([
      {
        name: process.env.AUTH_KAFKA_SERVICE_NAME,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: process.env.AUTH_KAFKA_CLIENT_ID,
            brokers: [`${process.env.AUTH_KAFKA_BROKER_HOST}:${process.env.AUTH_KAFKA_BROKER_PORT}`],
          },
          consumer: {
            groupId: process.env.AUTH_KAFKA_CONSUMER_GROUP_ID,
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
