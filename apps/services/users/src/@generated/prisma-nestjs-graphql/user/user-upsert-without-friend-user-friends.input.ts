import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFriendUserFriendsInput } from './user-update-without-friend-user-friends.input';
import { UserCreateWithoutFriendUserFriendsInput } from './user-create-without-friend-user-friends.input';

@InputType()
export class UserUpsertWithoutFriendUserFriendsInput {

    @Field(() => UserUpdateWithoutFriendUserFriendsInput, {nullable:false})
    update!: UserUpdateWithoutFriendUserFriendsInput;

    @Field(() => UserCreateWithoutFriendUserFriendsInput, {nullable:false})
    create!: UserCreateWithoutFriendUserFriendsInput;
}
