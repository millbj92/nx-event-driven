import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { FriendRequestCreateWithoutReceiverInput } from './friend-request-create-without-receiver.input';

@InputType()
export class FriendRequestCreateOrConnectWithoutReceiverInput {

    @Field(() => FriendRequestWhereUniqueInput, {nullable:false})
    where!: FriendRequestWhereUniqueInput;

    @Field(() => FriendRequestCreateWithoutReceiverInput, {nullable:false})
    create!: FriendRequestCreateWithoutReceiverInput;
}
