import { Injectable } from "@nestjs/common";
import { Saga, ICommand, ofType } from "@nestjs/cqrs";
import { MessageCreatedEvent, MessageDeletedEvent, MessageUpdatedEvent } from "@super-rad-poc/common/events";
import { Observable, filter, map } from "rxjs";
import { SendKafkaCommand, EventFactory } from "@super-rad-poc/common/events";

@Injectable()
export class MessagesSaga {
  @Saga()
  messageCreatedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(MessageCreatedEvent),
      filter(event => event.message.id !== undefined),
      map(event => {
        const newEvent = EventFactory.messageEvent("message.created", event.message, 1);
        return new SendKafkaCommand(newEvent);
      })
    );
  }

  @Saga()
  messageDeletedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(MessageDeletedEvent),
      filter(event => event.message.id !== undefined),
      map(event => {
        const newEvent = EventFactory.messageEvent("message.deleted", event.message, 1);
        return new SendKafkaCommand(newEvent);
      }),
    );
  }

  @Saga()
  messageUpdatedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(MessageUpdatedEvent),
      filter(event => event.message.id !== undefined),
      map(event => {
        const newEvent = EventFactory.messageEvent("message.updated", event.message, 1);
        return new SendKafkaCommand(newEvent);
      }),
    );
  }
}
