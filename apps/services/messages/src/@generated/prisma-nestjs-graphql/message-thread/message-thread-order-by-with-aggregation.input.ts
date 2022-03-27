import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessageThreadCountOrderByAggregateInput } from './message-thread-count-order-by-aggregate.input';
import { MessageThreadMaxOrderByAggregateInput } from './message-thread-max-order-by-aggregate.input';
import { MessageThreadMinOrderByAggregateInput } from './message-thread-min-order-by-aggregate.input';

@InputType()
export class MessageThreadOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    participants?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    messageIds?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => MessageThreadCountOrderByAggregateInput, {nullable:true})
    _count?: MessageThreadCountOrderByAggregateInput;

    @Field(() => MessageThreadMaxOrderByAggregateInput, {nullable:true})
    _max?: MessageThreadMaxOrderByAggregateInput;

    @Field(() => MessageThreadMinOrderByAggregateInput, {nullable:true})
    _min?: MessageThreadMinOrderByAggregateInput;
}
