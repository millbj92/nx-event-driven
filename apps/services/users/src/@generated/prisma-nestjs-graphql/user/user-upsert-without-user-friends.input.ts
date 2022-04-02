import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserFriendsInput } from './user-update-without-user-friends.input';
import { UserCreateWithoutUserFriendsInput } from './user-create-without-user-friends.input';

@InputType()
export class UserUpsertWithoutUserFriendsInput {

    @Field(() => UserUpdateWithoutUserFriendsInput, {nullable:false})
    update!: UserUpdateWithoutUserFriendsInput;

    @Field(() => UserCreateWithoutUserFriendsInput, {nullable:false})
    create!: UserCreateWithoutUserFriendsInput;
}
