import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendsWhereUniqueInput } from './friends-where-unique.input';
import { FriendsUpdateWithoutUsersInput } from './friends-update-without-users.input';

@InputType()
export class FriendsUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => FriendsWhereUniqueInput, {nullable:false})
    where!: FriendsWhereUniqueInput;

    @Field(() => FriendsUpdateWithoutUsersInput, {nullable:false})
    data!: FriendsUpdateWithoutUsersInput;
}
