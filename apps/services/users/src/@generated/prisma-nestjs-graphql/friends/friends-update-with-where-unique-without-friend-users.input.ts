import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendsWhereUniqueInput } from './friends-where-unique.input';
import { FriendsUpdateWithoutFriendUsersInput } from './friends-update-without-friend-users.input';

@InputType()
export class FriendsUpdateWithWhereUniqueWithoutFriendUsersInput {

    @Field(() => FriendsWhereUniqueInput, {nullable:false})
    where!: FriendsWhereUniqueInput;

    @Field(() => FriendsUpdateWithoutFriendUsersInput, {nullable:false})
    data!: FriendsUpdateWithoutFriendUsersInput;
}
