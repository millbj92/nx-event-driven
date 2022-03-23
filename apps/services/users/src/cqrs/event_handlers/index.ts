import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import {
  UserCreatedEvent,
  UserActivatedEvent,
  UserUpdatedEvent,
  UserDeactivatedEvent,
  UserBannedEvent,
  UserUnBannedEvent,
} from '@super-rad-poc/common/events';

@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent> {
  async handle(event: UserCreatedEvent) {
    console.log('UserCreatedHandler');
  }
}

@EventsHandler(UserUpdatedEvent)
export class UserUpdatedHandler implements IEventHandler<UserUpdatedEvent> {
  async handle(event: UserUpdatedEvent) {
    console.log('UserUpdatedHandler');
  }
}

@EventsHandler(UserActivatedEvent)
export class UserActivatedHandler implements IEventHandler<UserActivatedEvent> {
  async handle(event: UserActivatedEvent) {
    console.log('UserActivatedHandler');
  }
}

@EventsHandler(UserDeactivatedEvent)
export class UserDeactivatedHandler
  implements IEventHandler<UserDeactivatedEvent>
{
  async handle(event: UserDeactivatedEvent) {
    console.log('UserDeactivatedHandler');
  }
}

@EventsHandler(UserBannedEvent)
export class UserBannedHandler implements IEventHandler<UserBannedEvent> {
  async handle(event: UserBannedEvent) {
    console.log('UserBannedHandler');
  }
}

@EventsHandler(UserUnBannedEvent)
export class UserUnBannedHandler implements IEventHandler<UserUnBannedEvent> {
  async handle(event: UserUnBannedEvent) {
    console.log('UserUnBannedHandler');
  }
}


export const EventHandlers = [
  UserCreatedHandler,
  UserUpdatedHandler,
  UserActivatedHandler,
  UserDeactivatedHandler,
  UserBannedHandler,
  UserUnBannedHandler,
];
