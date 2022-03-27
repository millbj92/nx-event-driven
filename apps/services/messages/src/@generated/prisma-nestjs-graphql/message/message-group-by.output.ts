import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MessageCountAggregate } from './message-count-aggregate.output';
import { MessageMinAggregate } from './message-min-aggregate.output';
import { MessageMaxAggregate } from './message-max-aggregate.output';

@ObjectType()
export class MessageGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    threadId!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:false})
    fromId!: string;

    @Field(() => [String], {nullable:true})
    participants?: Array<string>;

    @Field(() => [String], {nullable:true})
    participantReadIds?: Array<string>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => MessageCountAggregate, {nullable:true})
    _count?: MessageCountAggregate;

    @Field(() => MessageMinAggregate, {nullable:true})
    _min?: MessageMinAggregate;

    @Field(() => MessageMaxAggregate, {nullable:true})
    _max?: MessageMaxAggregate;
}
