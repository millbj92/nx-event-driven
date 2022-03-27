import { Injectable } from "@nestjs/common";
import { Saga, ICommand, ofType } from "@nestjs/cqrs";
import { UserActivatedEvent, UserCreatedEvent, UserUnBannedEvent, UserUpdatedEvent, UserVerifiedEvent } from "@super-rad-poc/common/events";
import { Observable, filter, map } from "rxjs";
import { SendKafkaCommand } from '../commands/interface/index';


@Injectable()
export class UsersSaga {
  @Saga()
  userCreatedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserCreatedEvent),
      filter(event => event.user.id !== undefined),
      map(event => new SendKafkaCommand(event.user, "user.created")),
    );
  }

  @Saga()
  userUpdatedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserUpdatedEvent),
      filter(event => event.user.id !== undefined),
      map(event => new SendKafkaCommand(event.user,  "user.updated")),
      );
    }

    @Saga()
    userDeactivatedSaga = (events$: Observable<any>): Observable<ICommand> => {
      return events$.pipe(
        ofType(UserActivatedEvent),
        filter(event => event.user.id !== undefined),
        map(event => new SendKafkaCommand(event.user, "user.deactivated"))
      );
    }

  @Saga()
  userActivatedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserActivatedEvent),
      filter(event => event.user.id !== undefined),
      map(event => new SendKafkaCommand(event.user,  "user.activated")),
    );
  }

  @Saga()
  userBannedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserActivatedEvent),
      filter(event => event.user.id !== undefined),
      map(event => new SendKafkaCommand(event.user, "user.banned")),
    );
  }

  @Saga()
  userUnbannedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserUnBannedEvent),
      filter(event => event.user.id !== undefined),
      map(event => new SendKafkaCommand(event.user, "user.unbanned")),
    );
  }

  @Saga()
  userVerifiedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserVerifiedEvent),
      filter(event => event.user.id !== undefined),
      map(event => new SendKafkaCommand(event.user, 'user.verified')),
    );
  }
}
