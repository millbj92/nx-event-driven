import { CreateFileCommandHandler, UpdateFileCommandHandler, DeleteFileCommandHandler, SendKafkaCommandHandler } from "./impl";

export const CommandHandlers = [
  CreateFileCommandHandler,
  UpdateFileCommandHandler,
  DeleteFileCommandHandler,
  SendKafkaCommandHandler
];
