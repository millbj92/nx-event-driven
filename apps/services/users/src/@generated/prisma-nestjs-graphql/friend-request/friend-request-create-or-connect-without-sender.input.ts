import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { FriendRequestCreateWithoutSenderInput } from './friend-request-create-without-sender.input';

@InputType()
export class FriendRequestCreateOrConnectWithoutSenderInput {

    @Field(() => FriendRequestWhereUniqueInput, {nullable:false})
    where!: FriendRequestWhereUniqueInput;

    @Field(() => FriendRequestCreateWithoutSenderInput, {nullable:false})
    create!: FriendRequestCreateWithoutSenderInput;
}
