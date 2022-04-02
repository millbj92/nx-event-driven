import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { FriendRequestUpdateWithoutReceiverInput } from './friend-request-update-without-receiver.input';

@InputType()
export class FriendRequestUpdateWithWhereUniqueWithoutReceiverInput {

    @Field(() => FriendRequestWhereUniqueInput, {nullable:false})
    where!: FriendRequestWhereUniqueInput;

    @Field(() => FriendRequestUpdateWithoutReceiverInput, {nullable:false})
    data!: FriendRequestUpdateWithoutReceiverInput;
}
