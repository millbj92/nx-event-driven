import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFriendRequestsInput } from './user-create-without-friend-requests.input';
import { UserCreateOrConnectWithoutFriendRequestsInput } from './user-create-or-connect-without-friend-requests.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFriendRequestsInput {

    @Field(() => UserCreateWithoutFriendRequestsInput, {nullable:true})
    create?: UserCreateWithoutFriendRequestsInput;

    @Field(() => UserCreateOrConnectWithoutFriendRequestsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
