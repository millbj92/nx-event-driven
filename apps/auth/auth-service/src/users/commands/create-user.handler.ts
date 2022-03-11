import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { UsersService } from '../users.service';
import { CreateUserCommand } from './create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    private readonly service: UsersService,
    private readonly publisher: EventPublisher
  ) {}

  async execute(command: CreateUserCommand): Promise<string> {
    const { user } = command;
    const newUser = this.publisher.mergeObjectContext(
      await this.service.register(user)
    );
    newUser.created();
    newUser.commit();
    return newUser.jwt;
  }
}
