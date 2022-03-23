import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PostCreatedEvent, PostDeletedEvent, PostUpdatedEvent } from "@super-rad-poc/common/events";



@EventsHandler(PostCreatedEvent)
export class PostCreatedHandler implements IEventHandler<PostCreatedEvent> {
  async handle(event: PostCreatedEvent) {
    console.log('PostCreatedHandler');
  }

}


@EventsHandler(PostDeletedEvent)
export class PostDeletedHandler implements IEventHandler<PostDeletedEvent> {
  async handle(event: PostDeletedEvent) {
    console.log('PostDeletedHandler');
  }
}


@EventsHandler(PostUpdatedEvent)
export class PostUpdatedHandler implements IEventHandler<PostUpdatedEvent> {
  async handle(event: PostUpdatedEvent) {
    console.log('PostUpdatedHandler');
  }
}

export const EventHandlers = [
  PostCreatedHandler,
  PostDeletedHandler,
  PostUpdatedHandler,
];
