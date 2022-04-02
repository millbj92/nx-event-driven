import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutFriendRequestsInput } from './user-create-without-friend-requests.input';

@InputType()
export class UserCreateOrConnectWithoutFriendRequestsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFriendRequestsInput, {nullable:false})
    create!: UserCreateWithoutFriendRequestsInput;
}
