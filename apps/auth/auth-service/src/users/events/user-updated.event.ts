import { Inject } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PubSub } from 'graphql-subscriptions';

import { PUB_SUB } from '../pub-sub-provider';

export class UserUpdated {
  constructor(public readonly id: string) {}
}

@EventsHandler(UserUpdated)
export class UserUpdatedHandler implements IEventHandler<UserUpdated> {
  constructor(@Inject(PUB_SUB) private readonly pubSub: PubSub) {}

  async handle(event: UserUpdated) {
    this.pubSub.publish('userUpdated', { userDeleted: event.id });
  }
}
