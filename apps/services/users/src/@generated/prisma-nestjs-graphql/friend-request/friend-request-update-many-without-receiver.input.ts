import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestCreateWithoutReceiverInput } from './friend-request-create-without-receiver.input';
import { FriendRequestCreateOrConnectWithoutReceiverInput } from './friend-request-create-or-connect-without-receiver.input';
import { FriendRequestUpsertWithWhereUniqueWithoutReceiverInput } from './friend-request-upsert-with-where-unique-without-receiver.input';
import { FriendRequestCreateManyReceiverInputEnvelope } from './friend-request-create-many-receiver-input-envelope.input';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { FriendRequestUpdateWithWhereUniqueWithoutReceiverInput } from './friend-request-update-with-where-unique-without-receiver.input';
import { FriendRequestUpdateManyWithWhereWithoutReceiverInput } from './friend-request-update-many-with-where-without-receiver.input';
import { FriendRequestScalarWhereInput } from './friend-request-scalar-where.input';

@InputType()
export class FriendRequestUpdateManyWithoutReceiverInput {

    @Field(() => [FriendRequestCreateWithoutReceiverInput], {nullable:true})
    create?: Array<FriendRequestCreateWithoutReceiverInput>;

    @Field(() => [FriendRequestCreateOrConnectWithoutReceiverInput], {nullable:true})
    connectOrCreate?: Array<FriendRequestCreateOrConnectWithoutReceiverInput>;

    @Field(() => [FriendRequestUpsertWithWhereUniqueWithoutReceiverInput], {nullable:true})
    upsert?: Array<FriendRequestUpsertWithWhereUniqueWithoutReceiverInput>;

    @Field(() => FriendRequestCreateManyReceiverInputEnvelope, {nullable:true})
    createMany?: FriendRequestCreateManyReceiverInputEnvelope;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    set?: Array<FriendRequestWhereUniqueInput>;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    disconnect?: Array<FriendRequestWhereUniqueInput>;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    delete?: Array<FriendRequestWhereUniqueInput>;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    connect?: Array<FriendRequestWhereUniqueInput>;

    @Field(() => [FriendRequestUpdateWithWhereUniqueWithoutReceiverInput], {nullable:true})
    update?: Array<FriendRequestUpdateWithWhereUniqueWithoutReceiverInput>;

    @Field(() => [FriendRequestUpdateManyWithWhereWithoutReceiverInput], {nullable:true})
    updateMany?: Array<FriendRequestUpdateManyWithWhereWithoutReceiverInput>;

    @Field(() => [FriendRequestScalarWhereInput], {nullable:true})
    deleteMany?: Array<FriendRequestScalarWhereInput>;
}
