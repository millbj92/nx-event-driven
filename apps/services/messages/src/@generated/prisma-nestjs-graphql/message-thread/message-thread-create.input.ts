import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageThreadCreateparticipantsInput } from '../prisma/message-thread-createparticipants.input';
import { MessageThreadCreatemessageIdsInput } from '../prisma/message-thread-createmessage-ids.input';
import { MessageCreateNestedManyWithoutMessageThreadInput } from '../message/message-create-nested-many-without-message-thread.input';

@InputType()
export class MessageThreadCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MessageThreadCreateparticipantsInput, {nullable:true})
    participants?: MessageThreadCreateparticipantsInput;

    @Field(() => MessageThreadCreatemessageIdsInput, {nullable:true})
    messageIds?: MessageThreadCreatemessageIdsInput;

    @Field(() => MessageCreateNestedManyWithoutMessageThreadInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutMessageThreadInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
