import { Injectable } from "@nestjs/common";
import { ICommand, ofType, Saga } from "@nestjs/cqrs";
import { EventFactory, SendKafkaCommand } from "@super-rad-poc/common/events";
import { filter, map, Observable } from "rxjs";
import { UserLoggedInEvent, UserRegisteeredEvent, VerificationResentEvent } from "./events";
import {instanceToPlain } from "class-transformer";

@Injectable()
export class AuthSaga {
    @Saga()
    userCreatedSaga = (events$: Observable<any>): Observable<ICommand> => {
      return events$.pipe(
        ofType(UserRegisteeredEvent),
        filter(event => event.user.email !== undefined),
        map(event => new SendKafkaCommand(
            EventFactory.userEvent("user.created", event.user, 1),
        )),
      );
    }

    @Saga()
    userLoggedInSaga = (events$: Observable<any>): Observable<ICommand> => {
      return events$.pipe(
        ofType(UserLoggedInEvent),
        filter(event => event.user.email !== undefined),
        map(event => new SendKafkaCommand(
            EventFactory.userEvent("user.loggedin", {
                id: event.user.id,
                email: event.user.email,
            }, 1),
        )),
      );
    }

    // @Saga()
    // userVerifiedSaga = (events$: Observable<any>): Observable<ICommand> => {
    //   return events$.pipe(
    //     ofType(VerificationResentEvent),
    //     map(event => new SendKafkaCommand(
    //         EventFactory.userEvent("user.verified", {
    //             id: event.user.id,
    //         }, 1),
    //     )),
    //   );
    // }


    @Saga()
    verificationResentSaga = (events$: Observable<any>): Observable<ICommand> => {
      return events$.pipe(
        ofType(VerificationResentEvent),
        filter(event => event.email !== undefined),
        map(event => new SendKafkaCommand(
            EventFactory.userEvent("user.verification.resent", {
                email: event.email,
                verification: event.token,
            }, 1),
        )),
      );
    }
}