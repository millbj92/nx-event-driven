import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendsCreateWithoutUsersInput } from './friends-create-without-users.input';
import { FriendsCreateOrConnectWithoutUsersInput } from './friends-create-or-connect-without-users.input';
import { FriendsUpsertWithWhereUniqueWithoutUsersInput } from './friends-upsert-with-where-unique-without-users.input';
import { FriendsCreateManyUsersInputEnvelope } from './friends-create-many-users-input-envelope.input';
import { FriendsWhereUniqueInput } from './friends-where-unique.input';
import { FriendsUpdateWithWhereUniqueWithoutUsersInput } from './friends-update-with-where-unique-without-users.input';
import { FriendsUpdateManyWithWhereWithoutUsersInput } from './friends-update-many-with-where-without-users.input';
import { FriendsScalarWhereInput } from './friends-scalar-where.input';

@InputType()
export class FriendsUncheckedUpdateManyWithoutUsersInput {

    @Field(() => [FriendsCreateWithoutUsersInput], {nullable:true})
    create?: Array<FriendsCreateWithoutUsersInput>;

    @Field(() => [FriendsCreateOrConnectWithoutUsersInput], {nullable:true})
    connectOrCreate?: Array<FriendsCreateOrConnectWithoutUsersInput>;

    @Field(() => [FriendsUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    upsert?: Array<FriendsUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => FriendsCreateManyUsersInputEnvelope, {nullable:true})
    createMany?: FriendsCreateManyUsersInputEnvelope;

    @Field(() => [FriendsWhereUniqueInput], {nullable:true})
    set?: Array<FriendsWhereUniqueInput>;

    @Field(() => [FriendsWhereUniqueInput], {nullable:true})
    disconnect?: Array<FriendsWhereUniqueInput>;

    @Field(() => [FriendsWhereUniqueInput], {nullable:true})
    delete?: Array<FriendsWhereUniqueInput>;

    @Field(() => [FriendsWhereUniqueInput], {nullable:true})
    connect?: Array<FriendsWhereUniqueInput>;

    @Field(() => [FriendsUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    update?: Array<FriendsUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [FriendsUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    updateMany?: Array<FriendsUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [FriendsScalarWhereInput], {nullable:true})
    deleteMany?: Array<FriendsScalarWhereInput>;
}
