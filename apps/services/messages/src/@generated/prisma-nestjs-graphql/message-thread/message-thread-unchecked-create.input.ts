import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageThreadCreateparticipantsInput } from '../prisma/message-thread-createparticipants.input';
import { MessageThreadCreatemessageIdsInput } from '../prisma/message-thread-createmessage-ids.input';
import { MessageUncheckedCreateNestedManyWithoutMessageThreadInput } from '../message/message-unchecked-create-nested-many-without-message-thread.input';

@InputType()
export class MessageThreadUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MessageThreadCreateparticipantsInput, {nullable:true})
    participants?: MessageThreadCreateparticipantsInput;

    @Field(() => MessageThreadCreatemessageIdsInput, {nullable:true})
    messageIds?: MessageThreadCreatemessageIdsInput;

    @Field(() => MessageUncheckedCreateNestedManyWithoutMessageThreadInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutMessageThreadInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
