import { Injectable } from "@nestjs/common";
import { Saga, ICommand, ofType } from "@nestjs/cqrs";
import { FileCreatedEvent, FileDeletedEvent, FileUpdatedEvent } from "@super-rad-poc/common/events";
import { Observable, filter, map } from "rxjs";
import { SendKafkaCommand, EventFactory } from "@super-rad-poc/common/events";

;
@Injectable()
export class FilesSaga {
  @Saga()
  fileCreatedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(FileCreatedEvent),
      filter(event => event.file.id !== undefined),
      map(event => {
        const newEvent = EventFactory.fileEvent("file.created", event.file, 1);
        return new SendKafkaCommand(newEvent);
      }),
    );
  }

  @Saga()
  fileDeletedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(FileDeletedEvent),
      filter(event => event.file.id !== undefined),
      map(event => {
        const newEvent = EventFactory.fileEvent("file.deleted", event.file, 1);
        return new SendKafkaCommand(newEvent);
      }),
    );
  }

  @Saga()
  fileUpdatedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(FileUpdatedEvent),
      filter(event => event.file.id !== undefined),
      map(event => {
        const newEvent = EventFactory.fileEvent("file.updated", event.file, 1);
        return new SendKafkaCommand(newEvent);
      }),
    );
  }
}
