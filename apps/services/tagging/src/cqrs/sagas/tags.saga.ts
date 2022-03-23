import { Injectable } from "@nestjs/common";
import { Saga, ICommand, ofType } from "@nestjs/cqrs";
import { TagCreatedEvent, TagDeletedEvent, TagUpdatedEvent } from "@super-rad-poc/common/events";
import { Observable, filter, map } from "rxjs";
import { SendKafkaCommand, EventFactory } from "@super-rad-poc/common/events";

@Injectable()
export class TagsSaga {
  @Saga()
  tagCreatedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(TagCreatedEvent),
      filter(event => event.tag.id !== undefined),
      map(event => {
        const tagEvent = EventFactory.tagEvent("TAG_CREATED", event.tag, 1);
        return  new SendKafkaCommand(tagEvent)
      })
    );
  }

  @Saga()
  tagDeletedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(TagDeletedEvent),
      filter(event => event.tag.id !== undefined),
      map(event => {
        const newEvent = EventFactory.tagEvent("TAG_DELETED", event.tag, 1);
        return new SendKafkaCommand(newEvent);
      })
    );
  }

  @Saga()
  tagUpdatedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(TagUpdatedEvent),
      filter(event => event.tag.id !== undefined),
      map(event => {
        const newEvent = EventFactory.tagEvent("TAG_UPDATED", event.tag, 1);
        return new SendKafkaCommand(newEvent);
      })
    );

  }
}
