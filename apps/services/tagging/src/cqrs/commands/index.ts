import {
 CreateTagCommandHandler,
 UpdateTagCommandHandler,
  DeleteTagCommandHandler,
  SendKafkaCommandHandler
} from './impl';

export const CommandHandlers = [
  CreateTagCommandHandler,
  UpdateTagCommandHandler,
  DeleteTagCommandHandler,
  SendKafkaCommandHandler
];
