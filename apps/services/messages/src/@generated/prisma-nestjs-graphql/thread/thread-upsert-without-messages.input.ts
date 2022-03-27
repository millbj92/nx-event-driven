import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadUpdateWithoutMessagesInput } from './thread-update-without-messages.input';
import { ThreadCreateWithoutMessagesInput } from './thread-create-without-messages.input';

@InputType()
export class ThreadUpsertWithoutMessagesInput {

    @Field(() => ThreadUpdateWithoutMessagesInput, {nullable:false})
    update!: ThreadUpdateWithoutMessagesInput;

    @Field(() => ThreadCreateWithoutMessagesInput, {nullable:false})
    create!: ThreadCreateWithoutMessagesInput;
}
