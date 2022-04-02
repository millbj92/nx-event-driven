import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutUserFriendsInput } from './user-create-without-user-friends.input';

@InputType()
export class UserCreateOrConnectWithoutUserFriendsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutUserFriendsInput, {nullable:false})
    create!: UserCreateWithoutUserFriendsInput;
}
