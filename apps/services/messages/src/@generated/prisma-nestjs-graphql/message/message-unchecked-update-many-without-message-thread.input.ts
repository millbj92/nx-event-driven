import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutMessageThreadInput } from './message-create-without-message-thread.input';
import { MessageCreateOrConnectWithoutMessageThreadInput } from './message-create-or-connect-without-message-thread.input';
import { MessageUpsertWithWhereUniqueWithoutMessageThreadInput } from './message-upsert-with-where-unique-without-message-thread.input';
import { MessageCreateManyMessageThreadInputEnvelope } from './message-create-many-message-thread-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithWhereUniqueWithoutMessageThreadInput } from './message-update-with-where-unique-without-message-thread.input';
import { MessageUpdateManyWithWhereWithoutMessageThreadInput } from './message-update-many-with-where-without-message-thread.input';
import { MessageScalarWhereInput } from './message-scalar-where.input';

@InputType()
export class MessageUncheckedUpdateManyWithoutMessageThreadInput {

    @Field(() => [MessageCreateWithoutMessageThreadInput], {nullable:true})
    create?: Array<MessageCreateWithoutMessageThreadInput>;

    @Field(() => [MessageCreateOrConnectWithoutMessageThreadInput], {nullable:true})
    connectOrCreate?: Array<MessageCreateOrConnectWithoutMessageThreadInput>;

    @Field(() => [MessageUpsertWithWhereUniqueWithoutMessageThreadInput], {nullable:true})
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutMessageThreadInput>;

    @Field(() => MessageCreateManyMessageThreadInputEnvelope, {nullable:true})
    createMany?: MessageCreateManyMessageThreadInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    set?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    disconnect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    delete?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    connect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageUpdateWithWhereUniqueWithoutMessageThreadInput], {nullable:true})
    update?: Array<MessageUpdateWithWhereUniqueWithoutMessageThreadInput>;

    @Field(() => [MessageUpdateManyWithWhereWithoutMessageThreadInput], {nullable:true})
    updateMany?: Array<MessageUpdateManyWithWhereWithoutMessageThreadInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    deleteMany?: Array<MessageScalarWhereInput>;
}
