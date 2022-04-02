import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendsCreateWithoutFriendUsersInput } from './friends-create-without-friend-users.input';
import { FriendsCreateOrConnectWithoutFriendUsersInput } from './friends-create-or-connect-without-friend-users.input';
import { FriendsCreateManyFriendUsersInputEnvelope } from './friends-create-many-friend-users-input-envelope.input';
import { FriendsWhereUniqueInput } from './friends-where-unique.input';

@InputType()
export class FriendsUncheckedCreateNestedManyWithoutFriendUsersInput {

    @Field(() => [FriendsCreateWithoutFriendUsersInput], {nullable:true})
    create?: Array<FriendsCreateWithoutFriendUsersInput>;

    @Field(() => [FriendsCreateOrConnectWithoutFriendUsersInput], {nullable:true})
    connectOrCreate?: Array<FriendsCreateOrConnectWithoutFriendUsersInput>;

    @Field(() => FriendsCreateManyFriendUsersInputEnvelope, {nullable:true})
    createMany?: FriendsCreateManyFriendUsersInputEnvelope;

    @Field(() => [FriendsWhereUniqueInput], {nullable:true})
    connect?: Array<FriendsWhereUniqueInput>;
}
