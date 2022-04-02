import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserFriendsInput } from './user-create-without-user-friends.input';
import { UserCreateOrConnectWithoutUserFriendsInput } from './user-create-or-connect-without-user-friends.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserFriendsInput {

    @Field(() => UserCreateWithoutUserFriendsInput, {nullable:true})
    create?: UserCreateWithoutUserFriendsInput;

    @Field(() => UserCreateOrConnectWithoutUserFriendsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutUserFriendsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
