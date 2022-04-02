import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestCreateWithoutSenderInput } from './friend-request-create-without-sender.input';
import { FriendRequestCreateOrConnectWithoutSenderInput } from './friend-request-create-or-connect-without-sender.input';
import { FriendRequestUpsertWithWhereUniqueWithoutSenderInput } from './friend-request-upsert-with-where-unique-without-sender.input';
import { FriendRequestCreateManySenderInputEnvelope } from './friend-request-create-many-sender-input-envelope.input';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { FriendRequestUpdateWithWhereUniqueWithoutSenderInput } from './friend-request-update-with-where-unique-without-sender.input';
import { FriendRequestUpdateManyWithWhereWithoutSenderInput } from './friend-request-update-many-with-where-without-sender.input';
import { FriendRequestScalarWhereInput } from './friend-request-scalar-where.input';

@InputType()
export class FriendRequestUpdateManyWithoutSenderInput {

    @Field(() => [FriendRequestCreateWithoutSenderInput], {nullable:true})
    create?: Array<FriendRequestCreateWithoutSenderInput>;

    @Field(() => [FriendRequestCreateOrConnectWithoutSenderInput], {nullable:true})
    connectOrCreate?: Array<FriendRequestCreateOrConnectWithoutSenderInput>;

    @Field(() => [FriendRequestUpsertWithWhereUniqueWithoutSenderInput], {nullable:true})
    upsert?: Array<FriendRequestUpsertWithWhereUniqueWithoutSenderInput>;

    @Field(() => FriendRequestCreateManySenderInputEnvelope, {nullable:true})
    createMany?: FriendRequestCreateManySenderInputEnvelope;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    set?: Array<FriendRequestWhereUniqueInput>;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    disconnect?: Array<FriendRequestWhereUniqueInput>;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    delete?: Array<FriendRequestWhereUniqueInput>;

    @Field(() => [FriendRequestWhereUniqueInput], {nullable:true})
    connect?: Array<FriendRequestWhereUniqueInput>;

    @Field(() => [FriendRequestUpdateWithWhereUniqueWithoutSenderInput], {nullable:true})
    update?: Array<FriendRequestUpdateWithWhereUniqueWithoutSenderInput>;

    @Field(() => [FriendRequestUpdateManyWithWhereWithoutSenderInput], {nullable:true})
    updateMany?: Array<FriendRequestUpdateManyWithWhereWithoutSenderInput>;

    @Field(() => [FriendRequestScalarWhereInput], {nullable:true})
    deleteMany?: Array<FriendRequestScalarWhereInput>;
}
