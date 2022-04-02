import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutClaimsInput } from './user-update-without-claims.input';
import { UserCreateWithoutClaimsInput } from './user-create-without-claims.input';

@InputType()
export class UserUpsertWithoutClaimsInput {

    @Field(() => UserUpdateWithoutClaimsInput, {nullable:false})
    update!: UserUpdateWithoutClaimsInput;

    @Field(() => UserCreateWithoutClaimsInput, {nullable:false})
    create!: UserCreateWithoutClaimsInput;
}
