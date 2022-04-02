import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutClaimsInput } from './user-create-without-claims.input';
import { UserCreateOrConnectWithoutClaimsInput } from './user-create-or-connect-without-claims.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedOneWithoutClaimsInput {

    @Field(() => UserCreateWithoutClaimsInput, {nullable:true})
    create?: UserCreateWithoutClaimsInput;

    @Field(() => UserCreateOrConnectWithoutClaimsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutClaimsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
