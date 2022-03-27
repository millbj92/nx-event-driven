import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageThreadUpdateWithoutMessagesInput } from './message-thread-update-without-messages.input';
import { MessageThreadCreateWithoutMessagesInput } from './message-thread-create-without-messages.input';

@InputType()
export class MessageThreadUpsertWithoutMessagesInput {

    @Field(() => MessageThreadUpdateWithoutMessagesInput, {nullable:false})
    update!: MessageThreadUpdateWithoutMessagesInput;

    @Field(() => MessageThreadCreateWithoutMessagesInput, {nullable:false})
    create!: MessageThreadCreateWithoutMessagesInput;
}
