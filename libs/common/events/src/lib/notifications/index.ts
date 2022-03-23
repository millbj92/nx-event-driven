import { IEvent } from '@nestjs/cqrs'
import { Notification } from '@prisma/client/notifications';
import { IEventMetadata } from '../event_data/IEventMetadata';


export type INotificationEvent = IEvent

abstract class NotificationEvent implements INotificationEvent {
  constructor(public readonly notification: Notification) {}
}

export class NotificationCreatedEvent extends NotificationEvent {
  constructor(public readonly notification: Notification) {
    super(notification);
  }
}

export class NotificationUpdatedEvent extends NotificationEvent {
  constructor(public readonly notification: Notification) {
    super(notification);
  }
}

export class NotificationDeletedEvent extends NotificationEvent {
  constructor(public readonly notification: Notification) {
    super(notification);
  }
}

export class NotificationReadEvent extends NotificationEvent {
  constructor(public readonly notification: Notification) {
    super(notification);
  }
}
