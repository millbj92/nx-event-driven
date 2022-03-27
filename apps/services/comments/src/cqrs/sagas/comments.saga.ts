import { Injectable } from "@nestjs/common";
import { Saga, ICommand, ofType } from "@nestjs/cqrs";
import { CommentCreatedEvent, CommentDeletedEvent, CommentUpdatedEvent } from "@super-rad-poc/common/events";
import { Observable, filter, map } from "rxjs";
import { SendKafkaCommand, EventFactory } from "@super-rad-poc/common/events";


@Injectable()
export class CommentsSaga {

  @Saga()
  commentCreatedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(CommentCreatedEvent),
      filter(event => event.comment.id !== undefined),
      map(event => {
        const newEvent = EventFactory.commentEvent("comment.created", event.comment, 1);
        return new SendKafkaCommand(newEvent);
      }),
    );
  }

  @Saga()
  commentDeletedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(CommentDeletedEvent),
      filter(event => event.comment.id !== undefined),
      map(event => {
        const newEvent = EventFactory.commentEvent("comment.deleted", event.comment, 1);
        return new SendKafkaCommand(newEvent);
      }),
    );
  }

  @Saga()
  commentUpdatedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(CommentUpdatedEvent),
      filter(event => event.comment.id !== undefined),
      map(event => {
        const newEvent = EventFactory.commentEvent("comment.updated", event.comment, 1);
        return new SendKafkaCommand(newEvent);
      }),
    );
  }
}
