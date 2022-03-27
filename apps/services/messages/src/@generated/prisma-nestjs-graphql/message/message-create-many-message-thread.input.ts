import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateparticipantReadIdsInput } from '../prisma/message-createparticipant-read-ids.input';

@InputType()
export class MessageCreateManyMessageThreadInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    threadId!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:false})
    fromId!: string;

    @Field(() => MessageCreateparticipantReadIdsInput, {nullable:true})
    participantReadIds?: MessageCreateparticipantReadIdsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
