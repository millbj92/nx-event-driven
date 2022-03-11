import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginUserInput {
  @Field(() => String, { description: 'User Email for login' })
  email: string;

  @Field(() => String, { description: 'User Password for login' })
  password: string;
}
