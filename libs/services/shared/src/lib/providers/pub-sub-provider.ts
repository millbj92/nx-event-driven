import { Provider } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

export const PUB_SUB = 'PUB_SUB';

export const pubSubProvider: Provider = {
  provide: PUB_SUB,
  useValue: new PubSub(),
};
