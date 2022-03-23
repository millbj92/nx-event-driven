import { User } from '@prisma/client/users';
import { ICommand } from '@nestjs/cqrs'
import { UserCreateInput } from '../../../@generated/prisma-nestjs-graphql/user/user-create.input';
import { UserUpdateInput } from './../../../@generated/prisma-nestjs-graphql/user/user-update.input';
import { UserWhereUniqueInput } from './../../../@generated/prisma-nestjs-graphql/user/user-where-unique.input';
import { UserAggregate, UserEventType } from '@super-rad-poc/common/events';

export type IUser = User;


export class CreateUserCommand {
  constructor(public readonly user: UserCreateInput) {}
}

export class UpdateUserCommand {
  constructor(public readonly user: UserUpdateInput) {}
}

export class ActivateUserCommand {
  constructor(public readonly user: UserWhereUniqueInput) {}
}

export class DeactivateUserCommand {
  constructor(public readonly user: UserWhereUniqueInput) {}
}

export class VerifyUserCommand {
  constructor(public readonly user: UserWhereUniqueInput) {}
}

export class BanUserCommand {
  constructor(public readonly user: UserWhereUniqueInput) {}
}

export class UnbanUserCommand {
  constructor(public readonly user: UserWhereUniqueInput) {}
}


export class SendKafkaCommand {
  constructor(public readonly user: UserAggregate, public readonly type: UserEventType) {}
}
