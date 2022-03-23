import { Inject } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { NotificationCreatedEvent, NotificationDeletedEvent, NotificationUpdatedEvent } from "@super-rad-poc/common/events";


@EventsHandler(NotificationCreatedEvent)
export class NotificationCreatedHandler implements IEventHandler<NotificationCreatedEvent> {


  async handle(event: NotificationCreatedEvent) {
    console.log("NotificationCreatedHandler");
  }

}


@EventsHandler(NotificationDeletedEvent)
export class NotificationDeletedHandler implements IEventHandler<NotificationDeletedEvent> {

  async handle(event: NotificationDeletedEvent) {
    console.log("NotificationDeletedHandler");
  }

}


@EventsHandler(NotificationUpdatedEvent)
export class NotificationUpdatedHandler implements IEventHandler<NotificationUpdatedEvent> {

  async handle(event: NotificationUpdatedEvent) {
    console.log("NotificationUpdatedHandler");
  }
}



export const EventHandlers = [
  NotificationCreatedHandler,
  NotificationDeletedHandler,
  NotificationUpdatedHandler,
];
