import { Inject } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PubSub } from 'graphql-subscriptions';

import { PUB_SUB } from '../pub-sub-provider';

export class UserDeleted {
  constructor(public readonly id: string) {}
}

@EventsHandler(UserDeleted)
export class UserDeletedHandler implements IEventHandler<UserDeleted> {
  constructor(@Inject(PUB_SUB) private readonly pubSub: PubSub) {}

  async handle(event: UserDeleted) {
    this.pubSub.publish('userDeleted', { userDeleted: event.id });
  }
}
