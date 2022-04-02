import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendsCreateWithoutUsersInput } from './friends-create-without-users.input';
import { FriendsCreateOrConnectWithoutUsersInput } from './friends-create-or-connect-without-users.input';
import { FriendsCreateManyUsersInputEnvelope } from './friends-create-many-users-input-envelope.input';
import { FriendsWhereUniqueInput } from './friends-where-unique.input';

@InputType()
export class FriendsUncheckedCreateNestedManyWithoutUsersInput {

    @Field(() => [FriendsCreateWithoutUsersInput], {nullable:true})
    create?: Array<FriendsCreateWithoutUsersInput>;

    @Field(() => [FriendsCreateOrConnectWithoutUsersInput], {nullable:true})
    connectOrCreate?: Array<FriendsCreateOrConnectWithoutUsersInput>;

    @Field(() => FriendsCreateManyUsersInputEnvelope, {nullable:true})
    createMany?: FriendsCreateManyUsersInputEnvelope;

    @Field(() => [FriendsWhereUniqueInput], {nullable:true})
    connect?: Array<FriendsWhereUniqueInput>;
}
