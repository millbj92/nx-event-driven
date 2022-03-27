import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutThreadInput } from './message-create-without-thread.input';
import { MessageCreateOrConnectWithoutThreadInput } from './message-create-or-connect-without-thread.input';
import { MessageCreateManyThreadInputEnvelope } from './message-create-many-thread-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageUncheckedCreateNestedManyWithoutThreadInput {

    @Field(() => [MessageCreateWithoutThreadInput], {nullable:true})
    create?: Array<MessageCreateWithoutThreadInput>;

    @Field(() => [MessageCreateOrConnectWithoutThreadInput], {nullable:true})
    connectOrCreate?: Array<MessageCreateOrConnectWithoutThreadInput>;

    @Field(() => MessageCreateManyThreadInputEnvelope, {nullable:true})
    createMany?: MessageCreateManyThreadInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    connect?: Array<MessageWhereUniqueInput>;
}
