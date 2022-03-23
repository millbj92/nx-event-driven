import {
  CreateUserCommandHandler,
  UpdateUserCommandHandler,
  ActivateUserCommandHandler,
  DeactivateUserCommandHandler,
  VerifyUserCommandHandler,
  BanUserCommandHandler,
  UnbanUserCommandHandler,
  SendKafkaCommandHandler
} from './impl'

export const CommandHandlers = [
  CreateUserCommandHandler,
  UpdateUserCommandHandler,
  ActivateUserCommandHandler,
  DeactivateUserCommandHandler,
  VerifyUserCommandHandler,
  BanUserCommandHandler,
  UnbanUserCommandHandler,
  SendKafkaCommandHandler
];
