import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutFriendUserFriendsInput } from './user-create-without-friend-user-friends.input';

@InputType()
export class UserCreateOrConnectWithoutFriendUserFriendsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFriendUserFriendsInput, {nullable:false})
    create!: UserCreateWithoutFriendUserFriendsInput;
}
