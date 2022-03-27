import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageThreadCreateparticipantsInput } from '../prisma/message-thread-createparticipants.input';
import { MessageThreadCreatemessageIdsInput } from '../prisma/message-thread-createmessage-ids.input';

@InputType()
export class MessageThreadCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MessageThreadCreateparticipantsInput, {nullable:true})
    participants?: MessageThreadCreateparticipantsInput;

    @Field(() => MessageThreadCreatemessageIdsInput, {nullable:true})
    messageIds?: MessageThreadCreatemessageIdsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
