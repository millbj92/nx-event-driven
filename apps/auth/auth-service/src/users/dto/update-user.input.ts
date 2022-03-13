import { Field, ID, InputType, PartialType } from '@nestjs/graphql';

import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => ID, { description: 'Primary key of user' })
  id: string;

  @Field(() => String, { description: 'Users Name' })
  name: string;

  @Field(() => String, { description: 'Users Email' })
  email: string;

  @Field(() => String, { description: 'Users Password' })
  password: string;
}
