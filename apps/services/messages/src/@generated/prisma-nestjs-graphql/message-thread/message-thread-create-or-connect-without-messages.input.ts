import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageThreadWhereUniqueInput } from './message-thread-where-unique.input';
import { MessageThreadCreateWithoutMessagesInput } from './message-thread-create-without-messages.input';

@InputType()
export class MessageThreadCreateOrConnectWithoutMessagesInput {

    @Field(() => MessageThreadWhereUniqueInput, {nullable:false})
    where!: MessageThreadWhereUniqueInput;

    @Field(() => MessageThreadCreateWithoutMessagesInput, {nullable:false})
    create!: MessageThreadCreateWithoutMessagesInput;
}
