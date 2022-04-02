import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFriendUserFriendsInput } from './user-create-without-friend-user-friends.input';
import { UserCreateOrConnectWithoutFriendUserFriendsInput } from './user-create-or-connect-without-friend-user-friends.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFriendUserFriendsInput {

    @Field(() => UserCreateWithoutFriendUserFriendsInput, {nullable:true})
    create?: UserCreateWithoutFriendUserFriendsInput;

    @Field(() => UserCreateOrConnectWithoutFriendUserFriendsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutFriendUserFriendsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
