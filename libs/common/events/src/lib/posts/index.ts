import { IEvent } from '@nestjs/cqrs';
import { Post } from '@prisma/client/posts';
import { IEventMetadata } from './../event_data/IEventMetadata';

export type IPostEvent = IEvent;

abstract class PostEvent implements IEvent {
  constructor(public readonly post: Post) {}
}

export class PostCreatedEvent extends PostEvent {
  constructor(public readonly post: Post) {
    super(post);
  }
}

export class PostUpdatedEvent extends PostEvent {
  constructor(public readonly post: Post) {
    super(post);
  }
}

export class PostDeletedEvent extends PostEvent {
  constructor(public readonly post: Post) {
    super(post);
  }
}
