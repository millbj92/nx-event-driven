import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MessageUpdateparticipantsInput } from '../prisma/message-updateparticipants.input';
import { MessageUpdateparticipantReadIdsInput } from '../prisma/message-updateparticipant-read-ids.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class MessageUncheckedUpdateManyInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    threadId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    fromId?: StringFieldUpdateOperationsInput;

    @Field(() => MessageUpdateparticipantsInput, {nullable:true})
    participants?: MessageUpdateparticipantsInput;

    @Field(() => MessageUpdateparticipantReadIdsInput, {nullable:true})
    participantReadIds?: MessageUpdateparticipantReadIdsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;
}
