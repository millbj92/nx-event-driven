import { Injectable } from "@nestjs/common";
import { Saga, ICommand, ofType } from "@nestjs/cqrs";
import { PostCreatedEvent, PostDeletedEvent, PostUpdatedEvent } from "@super-rad-poc/common/events";
import { Observable, filter, map } from "rxjs";
import { EventFactory, SendKafkaCommand } from "@super-rad-poc/common/events";


@Injectable()
export class PostsSaga {
  @Saga()
  postCreatedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(PostCreatedEvent),
      filter(event => event.post.id !== undefined),
      map(event => {
        const postEvent = EventFactory.postEvent("POST_CREATED", event.post, 1);
        return new SendKafkaCommand(postEvent);
      }),
    );
  }

  @Saga()
  postDeletedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(PostDeletedEvent),
      filter(event => event.post.id !== undefined),
      map(event => {
        const newEvent = EventFactory.postEvent("POST_DELETED", event.post, 1);
        return new SendKafkaCommand(newEvent)
      })
    );
  }

  @Saga()
  postUpdatedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(PostUpdatedEvent),
      filter(event => event.post.id !== undefined),
      map(event => {
        const fileEvent = EventFactory.postEvent("POST_UPDATED", event.post, 1);
        return new SendKafkaCommand(fileEvent);
      }),
    );
  }
}
