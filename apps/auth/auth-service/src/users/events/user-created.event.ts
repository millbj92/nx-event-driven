import { Inject } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PubSub } from 'graphql-subscriptions';

import { PUB_SUB } from './../pub-sub-provider';

export class UserCreated {
  constructor(public readonly id: string) {}
}

@EventsHandler(UserCreated)
export class UserCreatedHandler implements IEventHandler<UserCreated> {
  constructor(@Inject(PUB_SUB) private readonly pubSub: PubSub) {}

  async handle(event: UserCreated) {
    this.pubSub.publish('userCreated', { userCreated: event.id });
  }
}
