import {CreateCommentCommandHandler, UpdateCommentCommandHandler, DeleteCommentCommandHandler, SendKafkaCommandHandler } from './impl';

export const CommandHandlers  = [
  CreateCommentCommandHandler,
  UpdateCommentCommandHandler,
  DeleteCommentCommandHandler,
  SendKafkaCommandHandler
];
