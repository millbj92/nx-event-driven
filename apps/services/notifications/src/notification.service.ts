import { Inject, Injectable } from '@nestjs/common';
import { NotificationCreateInput } from './@generated/prisma-nestjs-graphql/notification/notification-create.input';
import { PrismaService } from './prisma.service';
import {
  Notification
} from '@prisma/client/notifications';
import { NotificationWhereUniqueInput } from './@generated/prisma-nestjs-graphql/notification/notification-where-unique.input';
import { GraphQLResolveInfo } from 'graphql';
import { NotificationWhereInput } from './@generated/prisma-nestjs-graphql/notification/notification-where.input';
import { PrismaSelect } from '@paljs/plugins';
import { NotificationAggregateArgs } from './@generated/prisma-nestjs-graphql/notification/notification-aggregate.args';
import { NotificationUpdateInput } from './@generated/prisma-nestjs-graphql/notification/notification-update.input';
import { SendKafkaCommand } from '@super-rad-poc/common/events';
import { ClientKafka } from '@nestjs/microservices';


@Injectable()
export class NotificationService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject('NOTIFICATION_SERVICE') private readonly client: ClientKafka
  ) {}
  async create(data: NotificationCreateInput) {
    return await this.prismaService.notification.create({
      data
    });
  }

  async notifications(
    where: NotificationWhereInput,
    info: GraphQLResolveInfo
  ): Promise<Notification[] | null> {
    const select = new PrismaSelect(info).value;
    return await this.prismaService.notification.findMany({where,...select});
  };

  async notification(data: NotificationWhereUniqueInput): Promise<Notification | null> {
    return await this.prismaService.notification.findUnique({
      where:{
        ...data
      }
    });
  }

  async notificationAggregate(args: NotificationAggregateArgs) {
    return await this.prismaService.notification.aggregate(args)
  }



 async update(args: NotificationUpdateInput) {

    return await this.prismaService.notification.update({
      where:{
        id: args.id.set
      },
      data: args
    });
  };

  async remove(notification:NotificationWhereUniqueInput) {
    return this.prismaService.notification.delete({
      where:{
        id: notification.id
      }
    });
  }

  async sendToKafka(command: SendKafkaCommand) {
    const { event } = command;
    this.client.emit(event.topic, event.data);
  }
}
