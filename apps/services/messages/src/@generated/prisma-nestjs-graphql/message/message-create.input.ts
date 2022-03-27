import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadCreateNestedOneWithoutMessagesInput } from '../thread/thread-create-nested-one-without-messages.input';
import { MessageCreateparticipantsInput } from '../prisma/message-createparticipants.input';
import { MessageCreateparticipantReadIdsInput } from '../prisma/message-createparticipant-read-ids.input';

@InputType()
export class MessageCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ThreadCreateNestedOneWithoutMessagesInput, {nullable:false})
    thread!: ThreadCreateNestedOneWithoutMessagesInput;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:false})
    fromId!: string;

    @Field(() => MessageCreateparticipantsInput, {nullable:true})
    participants?: MessageCreateparticipantsInput;

    @Field(() => MessageCreateparticipantReadIdsInput, {nullable:true})
    participantReadIds?: MessageCreateparticipantReadIdsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
