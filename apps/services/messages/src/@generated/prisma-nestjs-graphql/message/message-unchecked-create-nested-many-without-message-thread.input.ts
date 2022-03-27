import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutMessageThreadInput } from './message-create-without-message-thread.input';
import { MessageCreateOrConnectWithoutMessageThreadInput } from './message-create-or-connect-without-message-thread.input';
import { MessageCreateManyMessageThreadInputEnvelope } from './message-create-many-message-thread-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageUncheckedCreateNestedManyWithoutMessageThreadInput {

    @Field(() => [MessageCreateWithoutMessageThreadInput], {nullable:true})
    create?: Array<MessageCreateWithoutMessageThreadInput>;

    @Field(() => [MessageCreateOrConnectWithoutMessageThreadInput], {nullable:true})
    connectOrCreate?: Array<MessageCreateOrConnectWithoutMessageThreadInput>;

    @Field(() => MessageCreateManyMessageThreadInputEnvelope, {nullable:true})
    createMany?: MessageCreateManyMessageThreadInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    connect?: Array<MessageWhereUniqueInput>;
}
