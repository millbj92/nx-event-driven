import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestCreateWithoutSenderInput } from './friend-request-create-without-sender.input';
import { FriendRequestCreateOrConnectWithoutSenderInput } from './friend-request-create-or-connect-without-sender.input';
import { FriendRequestCreateManySenderInputEnvelope } from './friend-request-create-many-sender-input-envelope.input';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';

@InputType()
export class FriendRequestUncheckedCreateNestedManyWithoutSenderInput {

    @Field(() => [FriendRequestCreateWithoutSenderInput], {nullable:true})
    create?: Array<FriendRequestCreateWithoutSenderInput>;

    @Field(() => [FriendRequestCreateOrConnectWithoutSenderInput], {nullable:true})
    connectOrCreate?: Array<FriendRequestCreateOrConnectWithoutSenderInput>;

    @Field(() => FriendRequestCreateManySenderInputEnvelope, {nullable:true})
    createMany?: FriendRequestCreateManySenderInputEnvelope;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    connect?: Array<FriendRequestWhereUniqueInput>;
}
