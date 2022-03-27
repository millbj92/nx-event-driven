import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Message } from '../../../message.model';
import { MessageThreadCount } from '../message/message-thread-count.output';

@ObjectType()
export class MessageThread {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => [String], {nullable:true})
    participants!: Array<string>;

    @Field(() => [String], {nullable:true})
    messageIds!: Array<string>;

    @Field(() => [Message], {nullable:true})
    messages?: Array<Message>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => MessageThreadCount, {nullable:false})
    _count?: MessageThreadCount;
}
