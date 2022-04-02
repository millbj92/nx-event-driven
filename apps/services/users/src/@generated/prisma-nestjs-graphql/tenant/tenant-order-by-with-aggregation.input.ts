import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TenantCountOrderByAggregateInput } from './tenant-count-order-by-aggregate.input';
import { TenantMaxOrderByAggregateInput } from './tenant-max-order-by-aggregate.input';
import { TenantMinOrderByAggregateInput } from './tenant-min-order-by-aggregate.input';

@InputType()
export class TenantOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clientSecret?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => TenantCountOrderByAggregateInput, {nullable:true})
    _count?: TenantCountOrderByAggregateInput;

    @Field(() => TenantMaxOrderByAggregateInput, {nullable:true})
    _max?: TenantMaxOrderByAggregateInput;

    @Field(() => TenantMinOrderByAggregateInput, {nullable:true})
    _min?: TenantMinOrderByAggregateInput;
}
