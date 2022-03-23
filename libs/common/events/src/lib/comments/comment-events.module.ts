import { Module } from '@nestjs/common';
import { CommentDeletedEvent, ICommentEvent } from '.';
import {
  CommentCreatedEvent,
  CommentUpdatedEvent,
} from '.';

Module({
  imports: [CommentCreatedEvent, CommentDeletedEvent, CommentUpdatedEvent],
  providers: [],
  exports: [CommentCreatedEvent, CommentDeletedEvent, CommentUpdatedEvent],
});
