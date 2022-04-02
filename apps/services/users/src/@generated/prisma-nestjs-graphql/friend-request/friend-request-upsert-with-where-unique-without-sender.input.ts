import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { FriendRequestUpdateWithoutSenderInput } from './friend-request-update-without-sender.input';
import { FriendRequestCreateWithoutSenderInput } from './friend-request-create-without-sender.input';

@InputType()
export class FriendRequestUpsertWithWhereUniqueWithoutSenderInput {

    @Field(() => FriendRequestWhereUniqueInput, {nullable:false})
    where!: FriendRequestWhereUniqueInput;

    @Field(() => FriendRequestUpdateWithoutSenderInput, {nullable:false})
    update!: FriendRequestUpdateWithoutSenderInput;

    @Field(() => FriendRequestCreateWithoutSenderInput, {nullable:false})
    create!: FriendRequestCreateWithoutSenderInput;
}
