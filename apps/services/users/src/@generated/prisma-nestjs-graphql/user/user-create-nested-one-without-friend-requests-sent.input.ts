import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFriendRequestsSentInput } from './user-create-without-friend-requests-sent.input';
import { UserCreateOrConnectWithoutFriendRequestsSentInput } from './user-create-or-connect-without-friend-requests-sent.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFriendRequestsSentInput {

    @Field(() => UserCreateWithoutFriendRequestsSentInput, {nullable:true})
    create?: UserCreateWithoutFriendRequestsSentInput;

    @Field(() => UserCreateOrConnectWithoutFriendRequestsSentInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestsSentInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
