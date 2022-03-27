import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ThreadCountOrderByAggregateInput } from './thread-count-order-by-aggregate.input';
import { ThreadMaxOrderByAggregateInput } from './thread-max-order-by-aggregate.input';
import { ThreadMinOrderByAggregateInput } from './thread-min-order-by-aggregate.input';

@InputType()
export class ThreadOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ThreadCountOrderByAggregateInput, {nullable:true})
    _count?: ThreadCountOrderByAggregateInput;

    @Field(() => ThreadMaxOrderByAggregateInput, {nullable:true})
    _max?: ThreadMaxOrderByAggregateInput;

    @Field(() => ThreadMinOrderByAggregateInput, {nullable:true})
    _min?: ThreadMinOrderByAggregateInput;
}
