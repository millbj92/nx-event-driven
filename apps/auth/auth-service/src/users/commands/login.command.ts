import { LoginUserInput } from './../dto/login-user.input';

export class UserLoginCommand {
  constructor(public readonly loginUserInput: LoginUserInput) {}
}
