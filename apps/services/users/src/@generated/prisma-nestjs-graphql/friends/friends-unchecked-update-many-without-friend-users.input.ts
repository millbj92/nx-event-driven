import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendsCreateWithoutFriendUsersInput } from './friends-create-without-friend-users.input';
import { FriendsCreateOrConnectWithoutFriendUsersInput } from './friends-create-or-connect-without-friend-users.input';
import { FriendsUpsertWithWhereUniqueWithoutFriendUsersInput } from './friends-upsert-with-where-unique-without-friend-users.input';
import { FriendsCreateManyFriendUsersInputEnvelope } from './friends-create-many-friend-users-input-envelope.input';
import { FriendsWhereUniqueInput } from './friends-where-unique.input';
import { FriendsUpdateWithWhereUniqueWithoutFriendUsersInput } from './friends-update-with-where-unique-without-friend-users.input';
import { FriendsUpdateManyWithWhereWithoutFriendUsersInput } from './friends-update-many-with-where-without-friend-users.input';
import { FriendsScalarWhereInput } from './friends-scalar-where.input';

@InputType()
export class FriendsUncheckedUpdateManyWithoutFriendUsersInput {

    @Field(() => [FriendsCreateWithoutFriendUsersInput], {nullable:true})
    create?: Array<FriendsCreateWithoutFriendUsersInput>;

    @Field(() => [FriendsCreateOrConnectWithoutFriendUsersInput], {nullable:true})
    connectOrCreate?: Array<FriendsCreateOrConnectWithoutFriendUsersInput>;

    @Field(() => [FriendsUpsertWithWhereUniqueWithoutFriendUsersInput], {nullable:true})
    upsert?: Array<FriendsUpsertWithWhereUniqueWithoutFriendUsersInput>;

    @Field(() => FriendsCreateManyFriendUsersInputEnvelope, {nullable:true})
    createMany?: FriendsCreateManyFriendUsersInputEnvelope;

    @Field(() => [FriendsWhereUniqueInput], {nullable:true})
    set?: Array<FriendsWhereUniqueInput>;

    @Field(() => [FriendsWhereUniqueInput], {nullable:true})
    disconnect?: Array<FriendsWhereUniqueInput>;

    @Field(() => [FriendsWhereUniqueInput], {nullable:true})
    delete?: Array<FriendsWhereUniqueInput>;

    @Field(() => [FriendsWhereUniqueInput], {nullable:true})
    connect?: Array<FriendsWhereUniqueInput>;

    @Field(() => [FriendsUpdateWithWhereUniqueWithoutFriendUsersInput], {nullable:true})
    update?: Array<FriendsUpdateWithWhereUniqueWithoutFriendUsersInput>;

    @Field(() => [FriendsUpdateManyWithWhereWithoutFriendUsersInput], {nullable:true})
    updateMany?: Array<FriendsUpdateManyWithWhereWithoutFriendUsersInput>;

    @Field(() => [FriendsScalarWhereInput], {nullable:true})
    deleteMany?: Array<FriendsScalarWhereInput>;
}
