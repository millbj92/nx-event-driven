import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';
import { MessageThreadOrderByRelevanceInput } from './message-thread-order-by-relevance.input';

@InputType()
export class MessageThreadOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    participants?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    messageIds?: keyof typeof SortOrder;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    messages?: MessageOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => MessageThreadOrderByRelevanceInput, {nullable:true})
    _relevance?: MessageThreadOrderByRelevanceInput;
}
