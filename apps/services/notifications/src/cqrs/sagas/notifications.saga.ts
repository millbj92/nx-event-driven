import { Injectable } from "@nestjs/common";
import { Saga, ICommand, ofType } from "@nestjs/cqrs";
import { NotificationCreatedEvent, NotificationDeletedEvent, NotificationUpdatedEvent } from "@super-rad-poc/common/events";
import { Observable, filter, map } from "rxjs";
import { SendKafkaCommand } from '../commands/interface/index';


@Injectable()
export class NotificationsSaga {
  @Saga()
  notificationCreatedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(NotificationCreatedEvent),
      filter(event => event.notification.id !== undefined),
      map(event => new SendKafkaCommand(event.notification, 'FILE_CREATED')),
    );
  }

  @Saga()
  notificationDeletedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(NotificationDeletedEvent),
      filter(event => event.notification.id !== undefined),
      map(event => new SendKafkaCommand(event.notification, "FILE_DELETED")),
    );
  }

  @Saga()
  notificationUpdatedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(NotificationUpdatedEvent),
      filter(event => event.notification.id !== undefined),
      map(event => new SendKafkaCommand(event.notification,  "FILE_UPDATED")),
    );
  }
}
