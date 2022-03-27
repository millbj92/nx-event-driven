import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MessageThreadUpdateparticipantsInput } from '../prisma/message-thread-updateparticipants.input';
import { MessageThreadUpdatemessageIdsInput } from '../prisma/message-thread-updatemessage-ids.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class MessageThreadUncheckedUpdateWithoutMessagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => MessageThreadUpdateparticipantsInput, {nullable:true})
    participants?: MessageThreadUpdateparticipantsInput;

    @Field(() => MessageThreadUpdatemessageIdsInput, {nullable:true})
    messageIds?: MessageThreadUpdatemessageIdsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;
}
