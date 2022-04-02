import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutFriendRequestsSentInput } from './user-create-without-friend-requests-sent.input';

@InputType()
export class UserCreateOrConnectWithoutFriendRequestsSentInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFriendRequestsSentInput, {nullable:false})
    create!: UserCreateWithoutFriendRequestsSentInput;
}
