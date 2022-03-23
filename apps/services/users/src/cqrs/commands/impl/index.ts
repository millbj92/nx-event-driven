import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UserService } from '../../../user.service';
import { ActivateUserCommand, CreateUserCommand, DeactivateUserCommand, VerifyUserCommand } from '../interface';
import { UpdateUserCommand, BanUserCommand, UnbanUserCommand } from './../interface/index';
import { plainToClass } from 'class-transformer';
import { UserAggregate } from '@super-rad-poc/common/events';
import { SendKafkaCommand } from '@super-rad-poc/common/events';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(
    private readonly service: UserService,
    private readonly publisher: EventPublisher
  ) {}

  async execute(command: CreateUserCommand) {
    const { user } = command;
    const newUser = await this.service.create(user);
    const fl = await this.service.create(user);
    const userAggregate = this.publisher.mergeObjectContext(
        plainToClass(UserAggregate, newUser)
    );
    userAggregate.create();
    userAggregate.commit();
  }
}

@CommandHandler(UpdateUserCommand)
export class UpdateUserCommandHandler
  implements ICommandHandler<UpdateUserCommand>
{
  constructor(
    private readonly service: UserService,
    private readonly publisher: EventPublisher
  ) {}

  async execute(command: UpdateUserCommand) {
    const { user } = command;
    const updatedUser = await this.service.update(user);
    const userAggregate = this.publisher.mergeObjectContext(
     plainToClass(UserAggregate, updatedUser)
    );

    userAggregate.update();
    userAggregate.commit();
  }
}

@CommandHandler(ActivateUserCommand)
export class ActivateUserCommandHandler
  implements ICommandHandler<ActivateUserCommand>
{
  constructor(
    private readonly service: UserService,
    private readonly publisher: EventPublisher
  ) {}

  async execute(command: ActivateUserCommand) {
    const { user } = command;
    const updatedUser = await this.service.activate(user);
    const userAggregate = this.publisher.mergeObjectContext(
     plainToClass(UserAggregate, updatedUser)
    );

    userAggregate.activate();
    userAggregate.commit();
  }
}

@CommandHandler(DeactivateUserCommand)
export class DeactivateUserCommandHandler
  implements ICommandHandler<DeactivateUserCommand>
{
  constructor(
    private readonly service: UserService,
    private readonly publisher: EventPublisher
  ) {}

  async execute(command: DeactivateUserCommand) {
    const { user } = command;

    const deactivatedUser = await this.service.remove(user);
    const userAggregate = this.publisher.mergeObjectContext(
      plainToClass(UserAggregate, deactivatedUser)
    );

    userAggregate.deactivate();
    userAggregate.commit();
  }
}


@CommandHandler(VerifyUserCommand)
export class VerifyUserCommandHandler
  implements ICommandHandler<VerifyUserCommand>
{
  constructor(
    private readonly service: UserService,
    private readonly publisher: EventPublisher
  ) {}

  async execute(command: VerifyUserCommand) {
    const { user } = command;

    const verifiedUser = await this.service.verify(user);
    const userAggregate = this.publisher.mergeObjectContext(
      plainToClass(UserAggregate, verifiedUser)
    );

    userAggregate.verify();
    userAggregate.commit();
  }
}

@CommandHandler(BanUserCommand)
export class BanUserCommandHandler
  implements ICommandHandler<BanUserCommand>
{
  constructor(
    private readonly service: UserService,
    private readonly publisher: EventPublisher
  ) {}

  async execute(command: BanUserCommand) {
    const { user } = command;

    const bannedUser = await this.service.ban(user);
    const userAggregate = this.publisher.mergeObjectContext(
      plainToClass(UserAggregate, bannedUser)
    );

    userAggregate.ban();
    userAggregate.commit();
  }
}

@CommandHandler(UnbanUserCommand)
export class UnbanUserCommandHandler
  implements ICommandHandler<UnbanUserCommand>
{
  constructor(
    private readonly service: UserService,
    private readonly publisher: EventPublisher
  ) {}

  async execute(command: UnbanUserCommand) {
    const { user } = command;

    const unbannedUser = await this.service.unban(user);
    const userAggregate = this.publisher.mergeObjectContext(
      plainToClass(UserAggregate, unbannedUser)
    );

    userAggregate.unban();
    userAggregate.commit();
  }
}


@CommandHandler(SendKafkaCommand)
export class SendKafkaCommandHandler
  implements ICommandHandler<SendKafkaCommand>
{
  constructor(
    private readonly publisher: EventPublisher
  ) {}

  async execute(command: SendKafkaCommand) {

    const userAggregate = this.publisher.mergeObjectContext(
      plainToClass(UserAggregate, command.event.data)
    );
    userAggregate.commit();
  }
}
