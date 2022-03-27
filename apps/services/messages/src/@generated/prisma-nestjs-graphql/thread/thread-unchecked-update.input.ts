import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MessageUncheckedUpdateManyWithoutThreadInput } from '../message/message-unchecked-update-many-without-thread.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class ThreadUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => MessageUncheckedUpdateManyWithoutThreadInput, {nullable:true})
    messages?: MessageUncheckedUpdateManyWithoutThreadInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;
}
