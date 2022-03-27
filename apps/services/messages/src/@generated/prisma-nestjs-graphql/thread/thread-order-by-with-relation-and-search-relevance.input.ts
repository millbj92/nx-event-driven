import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';
import { ThreadOrderByRelevanceInput } from './thread-order-by-relevance.input';

@InputType()
export class ThreadOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    messages?: MessageOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ThreadOrderByRelevanceInput, {nullable:true})
    _relevance?: ThreadOrderByRelevanceInput;
}
