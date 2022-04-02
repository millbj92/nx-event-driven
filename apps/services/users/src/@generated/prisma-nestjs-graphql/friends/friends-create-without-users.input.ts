import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutFriendUserFriendsInput } from '../user/user-create-nested-one-without-friend-user-friends.input';

@InputType()
export class FriendsCreateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutFriendUserFriendsInput, {nullable:false})
    FriendUsers!: UserCreateNestedOneWithoutFriendUserFriendsInput;

    @Field(() => Boolean, {nullable:true})
    status?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
