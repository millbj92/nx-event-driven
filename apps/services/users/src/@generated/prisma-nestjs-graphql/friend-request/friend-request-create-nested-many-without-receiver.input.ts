import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestCreateWithoutReceiverInput } from './friend-request-create-without-receiver.input';
import { FriendRequestCreateOrConnectWithoutReceiverInput } from './friend-request-create-or-connect-without-receiver.input';
import { FriendRequestCreateManyReceiverInputEnvelope } from './friend-request-create-many-receiver-input-envelope.input';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';

@InputType()
export class FriendRequestCreateNestedManyWithoutReceiverInput {

    @Field(() => [FriendRequestCreateWithoutReceiverInput], {nullable:true})
    create?: Array<FriendRequestCreateWithoutReceiverInput>;

    @Field(() => [FriendRequestCreateOrConnectWithoutReceiverInput], {nullable:true})
    connectOrCreate?: Array<FriendRequestCreateOrConnectWithoutReceiverInput>;

    @Field(() => FriendRequestCreateManyReceiverInputEnvelope, {nullable:true})
    createMany?: FriendRequestCreateManyReceiverInputEnvelope;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    connect?: Array<FriendRequestWhereUniqueInput>;
}
