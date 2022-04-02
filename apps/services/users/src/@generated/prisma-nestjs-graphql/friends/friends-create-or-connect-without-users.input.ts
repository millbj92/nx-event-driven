import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendsWhereUniqueInput } from './friends-where-unique.input';
import { FriendsCreateWithoutUsersInput } from './friends-create-without-users.input';

@InputType()
export class FriendsCreateOrConnectWithoutUsersInput {

    @Field(() => FriendsWhereUniqueInput, {nullable:false})
    where!: FriendsWhereUniqueInput;

    @Field(() => FriendsCreateWithoutUsersInput, {nullable:false})
    create!: FriendsCreateWithoutUsersInput;
}
