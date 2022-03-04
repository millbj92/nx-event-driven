interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  isLoggedIn(): boolean;
}

export class User implements IUser {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly email: string,
    readonly password: string
  ) {}

  isLoggedIn(): boolean {
    return true;
  }
}

export type UserForRegister = Omit<
  User,
  'id' | 'createdAt' | 'updatedAt' | 'posts'
>;
export type UserForLogin = Pick<User, 'email' | 'password'>;
