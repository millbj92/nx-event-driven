import { Field, InputType } from '@nestjs/graphql';
import * as Joi from 'joi';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Users Name' })
  name: string;

  @Field(() => String, { description: 'Users Email' })
  email: string;

  @Field(() => String, { description: 'Users Password' })
  password: string;
}

export const CreateUserSchema = Joi.object().keys({
  name: Joi.string().min(1).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .message('Password must be at least 8 characters long')
    .pattern(new RegExp(/(?=.*[a-z])(?=.*[A-Z])/), {
      name: 'mixedCase',
    })
    .message(
      'Password must contain at least one uppercase and one lowercase character.'
    )
    .pattern(new RegExp(/[0-9]/), {
      name: 'number',
    })
    .message('Password must contain at least one number')
    .pattern(new RegExp(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/), {
      name: 'specialChar',
    })
    .message('Password must have at least one special character')
    .required(),
});
