import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFriendRequestsSentInput } from './user-update-without-friend-requests-sent.input';
import { UserCreateWithoutFriendRequestsSentInput } from './user-create-without-friend-requests-sent.input';

@InputType()
export class UserUpsertWithoutFriendRequestsSentInput {

    @Field(() => UserUpdateWithoutFriendRequestsSentInput, {nullable:false})
    update!: UserUpdateWithoutFriendRequestsSentInput;

    @Field(() => UserCreateWithoutFriendRequestsSentInput, {nullable:false})
    create!: UserCreateWithoutFriendRequestsSentInput;
}
