import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutClaimsInput } from './user-create-without-claims.input';
import { UserCreateOrConnectWithoutClaimsInput } from './user-create-or-connect-without-claims.input';
import { UserUpsertWithoutClaimsInput } from './user-upsert-without-claims.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutClaimsInput } from './user-update-without-claims.input';

@InputType()
export class UserUncheckedUpdateOneWithoutClaimsInput {

    @Field(() => UserCreateWithoutClaimsInput, {nullable:true})
    create?: UserCreateWithoutClaimsInput;

    @Field(() => UserCreateOrConnectWithoutClaimsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutClaimsInput;

    @Field(() => UserUpsertWithoutClaimsInput, {nullable:true})
    upsert?: UserUpsertWithoutClaimsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutClaimsInput, {nullable:true})
    update?: UserUpdateWithoutClaimsInput;
}
