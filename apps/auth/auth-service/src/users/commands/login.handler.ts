import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { UsersService } from '../users.service';
import { UserLoginCommand } from './login.command';

@CommandHandler(UserLoginCommand)
export class LoginUserHandler implements ICommandHandler<UserLoginCommand> {
  constructor(
    private readonly service: UsersService,
    private readonly publisher: EventPublisher
  ) {}

  async execute(command: UserLoginCommand): Promise<string> {
    const { loginUserInput } = command;
    const aggUser = this.publisher.mergeObjectContext(
      await this.service.login(loginUserInput)
    );
    aggUser.loggedIn();
    aggUser.commit();
    return aggUser.jwt;
  }
}
