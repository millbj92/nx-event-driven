import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessageCountOrderByAggregateInput } from './message-count-order-by-aggregate.input';
import { MessageMaxOrderByAggregateInput } from './message-max-order-by-aggregate.input';
import { MessageMinOrderByAggregateInput } from './message-min-order-by-aggregate.input';

@InputType()
export class MessageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    read?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userIds?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => MessageCountOrderByAggregateInput, {nullable:true})
    _count?: MessageCountOrderByAggregateInput;

    @Field(() => MessageMaxOrderByAggregateInput, {nullable:true})
    _max?: MessageMaxOrderByAggregateInput;

    @Field(() => MessageMinOrderByAggregateInput, {nullable:true})
    _min?: MessageMinOrderByAggregateInput;
}
