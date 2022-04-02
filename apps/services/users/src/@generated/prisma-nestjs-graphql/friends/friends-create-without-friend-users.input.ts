import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUserFriendsInput } from '../user/user-create-nested-one-without-user-friends.input';

@InputType()
export class FriendsCreateWithoutFriendUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutUserFriendsInput, {nullable:false})
    Users!: UserCreateNestedOneWithoutUserFriendsInput;

    @Field(() => Boolean, {nullable:true})
    status?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
