import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { TagCreatedEvent, TagDeletedEvent, TagUpdatedEvent } from "@super-rad-poc/common/events";



@EventsHandler(TagCreatedEvent)
export class TagCreatedHandler implements IEventHandler<TagCreatedEvent> {
  async handle(event: TagCreatedEvent) {
    console.log('TagCreatedHandler');
  }

}


@EventsHandler(TagDeletedEvent)
export class TagDeletedHandler implements IEventHandler<TagDeletedEvent> {
  async handle(event: TagDeletedEvent) {
    console.log('TagDeletedHandler');
  }
}


@EventsHandler(TagUpdatedEvent)
export class TagUpdatedHandler implements IEventHandler<TagUpdatedEvent> {
  async handle(event: TagUpdatedEvent) {
    console.log('TagUpdatedHandler');
  }
}

export const EventHandlers = [
  TagCreatedHandler,
  TagDeletedHandler,
  TagUpdatedHandler,
];
