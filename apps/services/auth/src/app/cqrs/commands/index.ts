import { CommandHandler, EventPublisher, ICommand, ICommandHandler } from "@nestjs/cqrs";
import { User } from "@prisma/client/users";
import { AppService } from "../../app.service";
import { ResendVerificationUser, UserForLogin, UserForRegister } from "../../models";
import { plainToClass } from 'class-transformer';
import { SendKafkaCommand } from "@super-rad-poc/common/events";

export type IUser = User;


export class RegisterUserCommand {
  constructor(public readonly user: User) {}
}

export class LoginUserCommand {
    constructor(public readonly user: User) {}
}

export class ResendVerificationCommand {
  constructor(public readonly email: string) {}
}


@CommandHandler(RegisterUserCommand)
export class RegisterUserCommandHandler implements ICommandHandler<RegisterUserCommand>
{
      constructor(
          private readonly service: AppService,
          private readonly publisher: EventPublisher
      ) { }


      async execute(command: RegisterUserCommand) {
        const { user } = command;
        const newUser = await this.service.register(user)
        const userAggregate = this.publisher.mergeObjectContext(
            plainToClass(UserForRegister, newUser)
        );
        userAggregate.register();
        userAggregate.commit();
        return user;
      }

}


  @CommandHandler(LoginUserCommand)
  export class LoginUserCommandHandler implements ICommandHandler<LoginUserCommand>
  {
        constructor(
            private readonly service: AppService,
            private readonly publisher: EventPublisher
        ) { }

        async execute(command: LoginUserCommand): Promise<any> {
            const { user } = command;
            const token = await this.service.signToken(user)
            const userAggregate = this.publisher.mergeObjectContext(
                plainToClass(UserForLogin, user)
            );
            userAggregate.login();
            userAggregate.commit();

            return token
        }
  }


  @CommandHandler(ResendVerificationCommand)
  export class ResendVerificationCommandHandler implements ICommandHandler<ResendVerificationCommand>
  {
        constructor(
            private readonly service: AppService,
            private readonly publisher: EventPublisher
        ) { }

        async execute(command: ResendVerificationCommand): Promise<any> {
            const { email } = command;
            const token = await this.service.resendVerification(email)
            const userAggregate = this.publisher.mergeObjectContext(
                plainToClass(ResendVerificationUser, email)
            );
            userAggregate.resendVerification();
            userAggregate.commit();

            return token
        }
  }

  @CommandHandler(SendKafkaCommand)
export class SendKafkaCommandHandler implements ICommandHandler<SendKafkaCommand> {
  constructor(
    private readonly service: AppService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: SendKafkaCommand) {
    const { event } = command;
    await this.service.sendKafka(command);
    const userAggregate = this.publisher.mergeObjectContext(
      plainToClass(UserForLogin, event.data)
    );
    userAggregate.commit();
  };
}



  export const CommandHandlers = [
    RegisterUserCommandHandler,
    LoginUserCommandHandler,
    SendKafkaCommandHandler,
  ];
