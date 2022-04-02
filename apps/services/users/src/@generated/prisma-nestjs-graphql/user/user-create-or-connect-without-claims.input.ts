import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutClaimsInput } from './user-create-without-claims.input';

@InputType()
export class UserCreateOrConnectWithoutClaimsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutClaimsInput, {nullable:false})
    create!: UserCreateWithoutClaimsInput;
}
