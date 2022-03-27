import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateparticipantsInput } from '../prisma/message-createparticipants.input';
import { MessageCreateparticipantReadIdsInput } from '../prisma/message-createparticipant-read-ids.input';

@InputType()
export class MessageUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    threadId!: string;

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
