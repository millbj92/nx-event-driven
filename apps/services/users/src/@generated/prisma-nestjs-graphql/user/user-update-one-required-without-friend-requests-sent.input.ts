import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFriendRequestsSentInput } from './user-create-without-friend-requests-sent.input';
import { UserCreateOrConnectWithoutFriendRequestsSentInput } from './user-create-or-connect-without-friend-requests-sent.input';
import { UserUpsertWithoutFriendRequestsSentInput } from './user-upsert-without-friend-requests-sent.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFriendRequestsSentInput } from './user-update-without-friend-requests-sent.input';

@InputType()
export class UserUpdateOneRequiredWithoutFriendRequestsSentInput {

    @Field(() => UserCreateWithoutFriendRequestsSentInput, {nullable:true})
    create?: UserCreateWithoutFriendRequestsSentInput;

    @Field(() => UserCreateOrConnectWithoutFriendRequestsSentInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutFriendRequestsSentInput;

    @Field(() => UserUpsertWithoutFriendRequestsSentInput, {nullable:true})
    upsert?: UserUpsertWithoutFriendRequestsSentInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFriendRequestsSentInput, {nullable:true})
    update?: UserUpdateWithoutFriendRequestsSentInput;
}
