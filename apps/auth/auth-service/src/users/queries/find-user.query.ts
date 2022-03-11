import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { User } from '../entities/user.entity';
import { UsersService } from '../users.service';

export class IdSearchParams {
  constructor(public readonly id: string) {}
}

@QueryHandler(IdSearchParams)
export class FindUserQuery implements IQueryHandler<IdSearchParams> {
  constructor(private readonly service: UsersService) {}

  async execute({ id }: IdSearchParams): Promise<User> {
    return this.service.findOne(id);
  }
}
