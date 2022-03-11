import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { User } from '../entities/user.entity';
import { UsersService } from '../users.service';

export class UsersSearchParams {}

@QueryHandler(UsersSearchParams)
export class AllUsersQuery implements IQueryHandler<UsersSearchParams> {
  constructor(private readonly service: UsersService) {}

  async execute(query: UsersSearchParams): Promise<User[]> {
    return this.service.findAll();
  }
}
