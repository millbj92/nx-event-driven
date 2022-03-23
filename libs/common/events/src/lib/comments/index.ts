import { Comment } from '@prisma/client/comments'
import { IEventMetadata } from '../event_data/IEventMetadata';
import { IEvent } from '@nestjs/cqrs';


export type ICommentEvent = IEvent;

abstract class CommentEvent implements ICommentEvent {
  constructor(public readonly comment: Comment) {}
}

export class CommentCreatedEvent extends CommentEvent {
  constructor(public readonly comment: Comment) {
    super(comment);
  }
}

export class CommentUpdatedEvent extends CommentEvent {
  constructor(public readonly comment: Comment) {
    super(comment);
  }
}

export  class CommentDeletedEvent extends CommentEvent {
  constructor(public readonly comment: Comment) {
    super(comment);
  }
}

