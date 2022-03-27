import { EventsHandler } from "@nestjs/cqrs";
import { UserForLogin, UserForRegister } from "../../models";



export class UserRegisteeredEvent {
  constructor(
    public readonly user: UserForRegister
  ) {}
}

export class UserLoggedInEvent {
  constructor(
    public readonly user: UserForLogin
  ) {}
}

export class VerificationResentEvent {
  constructor(
    public readonly email: string,
    public readonly token: string
  ) {}
}


@EventsHandler(UserRegisteeredEvent)
export class UserRegisteeredEventHandler {
    async handle(event: UserRegisteeredEvent) {
        console.log('UserRegisteredHandler');
    }
}


@EventsHandler(UserLoggedInEvent)
export class UserLoggedInEventHandler {
    async handle(event: UserLoggedInEvent) {
        console.log('UserLoggedInHandler');
    }
}



export const EventHandlers = [
    UserRegisteeredEventHandler,
    UserLoggedInEventHandler
];