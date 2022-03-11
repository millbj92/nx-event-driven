import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { User } from '../entities/user.entity';
import { UsersService } from '../users.service';

export class EmailSearchParams {
  constructor(public readonly email: string) {}
}

@QueryHandler(EmailSearchParams)
export class FindUserByEmailQuery implements IQueryHandler<EmailSearchParams> {
  constructor(private readonly service: UsersService) {}

  async execute({ email }: EmailSearchParams): Promise<User> {
    return this.service.findOne(email);
  }
}
