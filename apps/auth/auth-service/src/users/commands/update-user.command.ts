import { UpdateUserInput } from './../dto/update-user.input';

export class UpdateUserCommand {
  constructor(public readonly id: string, public readonly user: UpdateUserInput) {}
}
