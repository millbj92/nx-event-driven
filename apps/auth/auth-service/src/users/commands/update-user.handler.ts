import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { UsersService } from '../users.service';
import { UpdateUserCommand } from './update-user.command';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(
    private readonly service: UsersService,
    private readonly publisher: EventPublisher
  ) {}

  async execute(command: UpdateUserCommand): Promise<void> {
    const { user } = command;
    const updatedUser = this.publisher.mergeObjectContext(
      await this.service.update(user.id, user)
    );
    updatedUser.updated();
    updatedUser.commit();
  }
}
