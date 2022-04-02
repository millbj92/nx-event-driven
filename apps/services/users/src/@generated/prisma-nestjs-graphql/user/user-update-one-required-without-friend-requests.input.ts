import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFriendRequestsInput } from './user-create-without-friend-requests.input';
import { UserCreateOrConnectWithoutFriendRequestsInput } from './user-create-or-connect-without-friend-requests.input';
import { UserUpsertWithoutFriendRequestsInput } from './user-upsert-without-friend-requests.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFriendRequestsInput } from './user-update-without-friend-requests.input';

@InputType()
export class UserUpdateOneRequiredWithoutFriendRequestsInput {

    @Field(() => UserCreateWithoutFriendRequestsInput, {nullable:true})
    create?: UserCreateWithoutFriendRequestsInput;

    @Field(() => UserCreateOrConnectWithoutFriendRequestsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestsInput;

    @Field(() => UserUpsertWithoutFriendRequestsInput, {nullable:true})
    upsert?: UserUpsertWithoutFriendRequestsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFriendRequestsInput, {nullable:true})
    update?: UserUpdateWithoutFriendRequestsInput;
}
