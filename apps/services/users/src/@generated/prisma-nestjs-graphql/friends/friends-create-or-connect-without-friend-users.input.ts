import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendsWhereUniqueInput } from './friends-where-unique.input';
import { FriendsCreateWithoutFriendUsersInput } from './friends-create-without-friend-users.input';

@InputType()
export class FriendsCreateOrConnectWithoutFriendUsersInput {

    @Field(() => FriendsWhereUniqueInput, {nullable:false})
    where!: FriendsWhereUniqueInput;

    @Field(() => FriendsCreateWithoutFriendUsersInput, {nullable:false})
    create!: FriendsCreateWithoutFriendUsersInput;
}
