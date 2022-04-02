import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFriendUserFriendsInput } from './user-create-without-friend-user-friends.input';
import { UserCreateOrConnectWithoutFriendUserFriendsInput } from './user-create-or-connect-without-friend-user-friends.input';
import { UserUpsertWithoutFriendUserFriendsInput } from './user-upsert-without-friend-user-friends.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFriendUserFriendsInput } from './user-update-without-friend-user-friends.input';

@InputType()
export class UserUpdateOneRequiredWithoutFriendUserFriendsInput {

    @Field(() => UserCreateWithoutFriendUserFriendsInput, {nullable:true})
    create?: UserCreateWithoutFriendUserFriendsInput;

    @Field(() => UserCreateOrConnectWithoutFriendUserFriendsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutFriendUserFriendsInput;

    @Field(() => UserUpsertWithoutFriendUserFriendsInput, {nullable:true})
    upsert?: UserUpsertWithoutFriendUserFriendsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFriendUserFriendsInput, {nullable:true})
    update?: UserUpdateWithoutFriendUserFriendsInput;
}
