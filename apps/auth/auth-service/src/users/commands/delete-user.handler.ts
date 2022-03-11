import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { UsersService } from '../users.service';
import { DeleteUserCommand } from './delete-user.command';

@CommandHandler(DeleteUserCommand)
export class DeleteUserHandler implements ICommandHandler<DeleteUserCommand> {
  constructor(
    private readonly service: UsersService,
    private readonly publisher: EventPublisher
  ) {}

  async execute(command: DeleteUserCommand): Promise<void> {
    const { id } = command;
    const deletedUser = this.publisher.mergeObjectContext(
      await this.service.remove(id)
    );
    deletedUser.deleted();
    deletedUser.commit();
  }
}
