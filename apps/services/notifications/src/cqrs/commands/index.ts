import {
  CreateNotificationCommandHandler,
  UpdateNotificationCommandHandler,
  DeleteNotificationCommandHandler,
  SendKafkaCommandHandler
} from './impl'


export const CommandHandlers = [
  CreateNotificationCommandHandler,
  UpdateNotificationCommandHandler,
  DeleteNotificationCommandHandler,
  SendKafkaCommandHandler
];
