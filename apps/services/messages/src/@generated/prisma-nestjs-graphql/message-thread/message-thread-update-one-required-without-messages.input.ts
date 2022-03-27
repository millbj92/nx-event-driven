import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageThreadCreateWithoutMessagesInput } from './message-thread-create-without-messages.input';
import { MessageThreadCreateOrConnectWithoutMessagesInput } from './message-thread-create-or-connect-without-messages.input';
import { MessageThreadUpsertWithoutMessagesInput } from './message-thread-upsert-without-messages.input';
import { MessageThreadWhereUniqueInput } from './message-thread-where-unique.input';
import { MessageThreadUpdateWithoutMessagesInput } from './message-thread-update-without-messages.input';

@InputType()
export class MessageThreadUpdateOneRequiredWithoutMessagesInput {

    @Field(() => MessageThreadCreateWithoutMessagesInput, {nullable:true})
    create?: MessageThreadCreateWithoutMessagesInput;

    @Field(() => MessageThreadCreateOrConnectWithoutMessagesInput, {nullable:true})
    connectOrCreate?: MessageThreadCreateOrConnectWithoutMessagesInput;

    @Field(() => MessageThreadUpsertWithoutMessagesInput, {nullable:true})
    upsert?: MessageThreadUpsertWithoutMessagesInput;

    @Field(() => MessageThreadWhereUniqueInput, {nullable:true})
    connect?: MessageThreadWhereUniqueInput;

    @Field(() => MessageThreadUpdateWithoutMessagesInput, {nullable:true})
    update?: MessageThreadUpdateWithoutMessagesInput;
}
