import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendsWhereUniqueInput } from './friends-where-unique.input';
import { FriendsUpdateWithoutUsersInput } from './friends-update-without-users.input';
import { FriendsCreateWithoutUsersInput } from './friends-create-without-users.input';

@InputType()
export class FriendsUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => FriendsWhereUniqueInput, {nullable:false})
    where!: FriendsWhereUniqueInput;

    @Field(() => FriendsUpdateWithoutUsersInput, {nullable:false})
    update!: FriendsUpdateWithoutUsersInput;

    @Field(() => FriendsCreateWithoutUsersInput, {nullable:false})
    create!: FriendsCreateWithoutUsersInput;
}
