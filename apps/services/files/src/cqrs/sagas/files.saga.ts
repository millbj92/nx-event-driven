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
        const newEvent = EventFactory.fileEvent("FILE_CREATED", event.file, 1);
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
        const newEvent = EventFactory.fileEvent("FILE_DELETED", event.file, 1);
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
        const newEvent = EventFactory.fileEvent("FILE_UPDATED", event.file, 1);
        return new SendKafkaCommand(newEvent);
      }),
    );
  }
}
