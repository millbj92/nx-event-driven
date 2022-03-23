import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { CommentCreatedEvent, CommentDeletedEvent, CommentUpdatedEvent } from "@super-rad-poc/common/events";

@EventsHandler(CommentCreatedEvent)
export class CommentCreatedHandler implements IEventHandler<CommentCreatedEvent> {
  async handle(event: CommentCreatedEvent) {
    console.log('CommentCreatedHandler');
  }
}


@EventsHandler(CommentDeletedEvent)
export class CommentDeletedHandler implements IEventHandler<CommentDeletedEvent> {
  async handle(event: CommentDeletedEvent) {
    console.log('CommentDeletedHandler');
  }
}


@EventsHandler(CommentUpdatedEvent)
export class CommentUpdatedHandler implements IEventHandler<CommentUpdatedEvent> {
  async handle(event: CommentUpdatedEvent) {
    console.log('CommentUpdatedHandler');
  }
}

export const EventHandlers = [
  CommentCreatedHandler,
  CommentDeletedHandler,
  CommentUpdatedHandler,
]
