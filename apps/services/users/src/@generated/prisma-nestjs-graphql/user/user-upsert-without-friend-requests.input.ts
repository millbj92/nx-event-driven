import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFriendRequestsInput } from './user-update-without-friend-requests.input';
import { UserCreateWithoutFriendRequestsInput } from './user-create-without-friend-requests.input';

@InputType()
export class UserUpsertWithoutFriendRequestsInput {

    @Field(() => UserUpdateWithoutFriendRequestsInput, {nullable:false})
    update!: UserUpdateWithoutFriendRequestsInput;

    @Field(() => UserCreateWithoutFriendRequestsInput, {nullable:false})
    create!: UserCreateWithoutFriendRequestsInput;
}
