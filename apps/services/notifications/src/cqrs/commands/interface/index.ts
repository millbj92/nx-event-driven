import { Notification } from '@prisma/client/notifications';
import { ICommand } from '@nestjs/cqrs'
import { NotificationAggregate } from '../../../notification.model';
import { NotificationCreateInput } from '../../../@generated/prisma-nestjs-graphql/notification/notification-create.input';
import { NotificationUpdateInput } from './../../../@generated/prisma-nestjs-graphql/notification/notification-update.input';
import { NotificationWhereUniqueInput } from './../../../@generated/prisma-nestjs-graphql/notification/notification-where-unique.input';

export interface INotificationCommand extends ICommand {
  notification: Notification;
};

abstract class NotificationCommand implements INotificationCommand {
  constructor(public readonly notification: NotificationAggregate) {}
}

export class CreateNotificationCommand {
  constructor(public readonly notification: NotificationCreateInput) {}
}

export class UpdateNotificationCommand {
  constructor(public readonly notification: NotificationUpdateInput) {}
}

export class DeleteNotificationCommand {
  constructor(public readonly notification: NotificationWhereUniqueInput) {}
}

export type NotificationEventType = 'FILE_CREATED' | 'FILE_UPDATED' | 'FILE_DELETED';
export class SendKafkaCommand {
  constructor(public readonly notification: Notification, public readonly type: NotificationEventType) {}
}
