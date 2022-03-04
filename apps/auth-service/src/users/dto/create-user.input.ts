import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Users Name' })
  name: string;

  @Field(() => String, { description: 'Users Email' })
  email: string;

  @Field(() => String, { description: 'Users Password' })
  password: string;
}
