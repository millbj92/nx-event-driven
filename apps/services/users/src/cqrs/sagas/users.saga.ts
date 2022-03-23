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
      map(event => new SendKafkaCommand(event.user, 'USER_CREATED')),
    );
  }

  @Saga()
  userUpdatedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserUpdatedEvent),
      filter(event => event.user.id !== undefined),
      map(event => new SendKafkaCommand(event.user,  'USER_UPDATED')),
      );
    }

    @Saga()
    userDeactivatedSaga = (events$: Observable<any>): Observable<ICommand> => {
      return events$.pipe(
        ofType(UserActivatedEvent),
        filter(event => event.user.id !== undefined),
        map(event => new SendKafkaCommand(event.user, 'USER_ACTIVATED')),
      );
    }

  @Saga()
  userActivatedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserActivatedEvent),
      filter(event => event.user.id !== undefined),
      map(event => new SendKafkaCommand(event.user,  'USER_ACTIVATED')),
    );
  }

  @Saga()
  userBannedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserActivatedEvent),
      filter(event => event.user.id !== undefined),
      map(event => new SendKafkaCommand(event.user, 'USER_BANNED')),
    );
  }

  @Saga()
  userUnbannedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserUnBannedEvent),
      filter(event => event.user.id !== undefined),
      map(event => new SendKafkaCommand(event.user, 'USER_UNBANNED')),
    );
  }

  @Saga()
  userVerifiedSaga = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserVerifiedEvent),
      filter(event => event.user.id !== undefined),
      map(event => new SendKafkaCommand(event.user, 'USER_VERIFIED')),
    );
  }


}
