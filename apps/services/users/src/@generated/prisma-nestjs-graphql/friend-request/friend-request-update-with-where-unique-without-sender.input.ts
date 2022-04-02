import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { FriendRequestUpdateWithoutSenderInput } from './friend-request-update-without-sender.input';

@InputType()
export class FriendRequestUpdateWithWhereUniqueWithoutSenderInput {

    @Field(() => FriendRequestWhereUniqueInput, {nullable:false})
    where!: FriendRequestWhereUniqueInput;

    @Field(() => FriendRequestUpdateWithoutSenderInput, {nullable:false})
    data!: FriendRequestUpdateWithoutSenderInput;
}
