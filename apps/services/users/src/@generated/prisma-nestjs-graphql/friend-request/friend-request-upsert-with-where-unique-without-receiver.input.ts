import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { FriendRequestUpdateWithoutReceiverInput } from './friend-request-update-without-receiver.input';
import { FriendRequestCreateWithoutReceiverInput } from './friend-request-create-without-receiver.input';

@InputType()
export class FriendRequestUpsertWithWhereUniqueWithoutReceiverInput {

    @Field(() => FriendRequestWhereUniqueInput, {nullable:false})
    where!: FriendRequestWhereUniqueInput;

    @Field(() => FriendRequestUpdateWithoutReceiverInput, {nullable:false})
    update!: FriendRequestUpdateWithoutReceiverInput;

    @Field(() => FriendRequestCreateWithoutReceiverInput, {nullable:false})
    create!: FriendRequestCreateWithoutReceiverInput;
}
