import { Inject } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PubSub } from 'graphql-subscriptions';

import { PUB_SUB } from '../pub-sub-provider';

export class UserLoggedIn {
  constructor(public readonly id: string) {}
}

@EventsHandler(UserLoggedIn)
export class UserLoggedInHandler implements IEventHandler<UserLoggedIn> {
  constructor(@Inject(PUB_SUB) private readonly pubSub: PubSub) {}

  async handle(event: UserLoggedIn) {
    this.pubSub.publish('userLoggedIn', { userLoggedIn: event.id });
  }
}
