import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutThreadInput } from './message-create-without-thread.input';
import { MessageCreateOrConnectWithoutThreadInput } from './message-create-or-connect-without-thread.input';
import { MessageUpsertWithWhereUniqueWithoutThreadInput } from './message-upsert-with-where-unique-without-thread.input';
import { MessageCreateManyThreadInputEnvelope } from './message-create-many-thread-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithWhereUniqueWithoutThreadInput } from './message-update-with-where-unique-without-thread.input';
import { MessageUpdateManyWithWhereWithoutThreadInput } from './message-update-many-with-where-without-thread.input';
import { MessageScalarWhereInput } from './message-scalar-where.input';

@InputType()
export class MessageUncheckedUpdateManyWithoutThreadInput {

    @Field(() => [MessageCreateWithoutThreadInput], {nullable:true})
    create?: Array<MessageCreateWithoutThreadInput>;

    @Field(() => [MessageCreateOrConnectWithoutThreadInput], {nullable:true})
    connectOrCreate?: Array<MessageCreateOrConnectWithoutThreadInput>;

    @Field(() => [MessageUpsertWithWhereUniqueWithoutThreadInput], {nullable:true})
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutThreadInput>;

    @Field(() => MessageCreateManyThreadInputEnvelope, {nullable:true})
    createMany?: MessageCreateManyThreadInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    set?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    disconnect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    delete?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    connect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageUpdateWithWhereUniqueWithoutThreadInput], {nullable:true})
    update?: Array<MessageUpdateWithWhereUniqueWithoutThreadInput>;

    @Field(() => [MessageUpdateManyWithWhereWithoutThreadInput], {nullable:true})
    updateMany?: Array<MessageUpdateManyWithWhereWithoutThreadInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    deleteMany?: Array<MessageScalarWhereInput>;
}
