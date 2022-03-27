import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MessageThreadCountAggregate } from './message-thread-count-aggregate.output';
import { MessageThreadMinAggregate } from './message-thread-min-aggregate.output';
import { MessageThreadMaxAggregate } from './message-thread-max-aggregate.output';

@ObjectType()
export class MessageThreadGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => [String], {nullable:true})
    participants?: Array<string>;

    @Field(() => [String], {nullable:true})
    messageIds?: Array<string>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => MessageThreadCountAggregate, {nullable:true})
    _count?: MessageThreadCountAggregate;

    @Field(() => MessageThreadMinAggregate, {nullable:true})
    _min?: MessageThreadMinAggregate;

    @Field(() => MessageThreadMaxAggregate, {nullable:true})
    _max?: MessageThreadMaxAggregate;
}
