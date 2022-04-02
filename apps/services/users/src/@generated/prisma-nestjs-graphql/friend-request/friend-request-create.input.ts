import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutFriendRequestsInput } from '../user/user-create-nested-one-without-friend-requests.input';
import { UserCreateNestedOneWithoutFriendRequestsSentInput } from '../user/user-create-nested-one-without-friend-requests-sent.input';

@InputType()
export class FriendRequestCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutFriendRequestsInput, {nullable:false})
    receiver!: UserCreateNestedOneWithoutFriendRequestsInput;

    @Field(() => UserCreateNestedOneWithoutFriendRequestsSentInput, {nullable:false})
    sender!: UserCreateNestedOneWithoutFriendRequestsSentInput;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
