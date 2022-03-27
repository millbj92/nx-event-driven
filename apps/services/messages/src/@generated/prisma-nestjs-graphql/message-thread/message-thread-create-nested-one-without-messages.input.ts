import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageThreadCreateWithoutMessagesInput } from './message-thread-create-without-messages.input';
import { MessageThreadCreateOrConnectWithoutMessagesInput } from './message-thread-create-or-connect-without-messages.input';
import { MessageThreadWhereUniqueInput } from './message-thread-where-unique.input';

@InputType()
export class MessageThreadCreateNestedOneWithoutMessagesInput {

    @Field(() => MessageThreadCreateWithoutMessagesInput, {nullable:true})
    create?: MessageThreadCreateWithoutMessagesInput;

    @Field(() => MessageThreadCreateOrConnectWithoutMessagesInput, {nullable:true})
    connectOrCreate?: MessageThreadCreateOrConnectWithoutMessagesInput;

    @Field(() => MessageThreadWhereUniqueInput, {nullable:true})
    connect?: MessageThreadWhereUniqueInput;
}
