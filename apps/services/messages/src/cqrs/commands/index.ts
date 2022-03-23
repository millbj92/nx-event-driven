import { CreateMessageCommandHandler, UpdateMessageCommandHandler, DeleteMessageCommandHandler, SendKafkaCommandHandler } from "./impl";


export const CommandHandlers = [
  CreateMessageCommandHandler,
  UpdateMessageCommandHandler,
  DeleteMessageCommandHandler,
  SendKafkaCommandHandler
];
