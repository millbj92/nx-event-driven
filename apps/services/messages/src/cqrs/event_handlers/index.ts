import { Inject } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { MessageCreatedEvent, MessageDeletedEvent,MessageUpdatedEvent } from "@super-rad-poc/common/events";

@EventsHandler(MessageCreatedEvent)
export class MessageCreatedHandler implements IEventHandler<MessageCreatedEvent> {
  async handle(event: MessageCreatedEvent) {
    console.log("MessageCreatedHandler");
  }
}


@EventsHandler(MessageDeletedEvent)
export class MessageDeletedHandler implements IEventHandler<MessageDeletedEvent> {
  async handle(event: MessageDeletedEvent) {
    console.log("MessageDeletedHandler");
  }

}


@EventsHandler(MessageUpdatedEvent)
export class MessageUpdatedHandler implements IEventHandler<MessageUpdatedEvent> {
  async handle(event: MessageUpdatedEvent) {
    console.log("MessageUpdatedHandler");
  }
}


export const EventHandlers = [
  MessageCreatedHandler,
  MessageDeletedHandler,
  MessageUpdatedHandler,
];
