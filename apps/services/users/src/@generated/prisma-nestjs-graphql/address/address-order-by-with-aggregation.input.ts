import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AddressCountOrderByAggregateInput } from './address-count-order-by-aggregate.input';
import { AddressMaxOrderByAggregateInput } from './address-max-order-by-aggregate.input';
import { AddressMinOrderByAggregateInput } from './address-min-order-by-aggregate.input';

@InputType()
export class AddressOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    street_address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locality?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    region?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postal_code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => AddressCountOrderByAggregateInput, {nullable:true})
    _count?: AddressCountOrderByAggregateInput;

    @Field(() => AddressMaxOrderByAggregateInput, {nullable:true})
    _max?: AddressMaxOrderByAggregateInput;

    @Field(() => AddressMinOrderByAggregateInput, {nullable:true})
    _min?: AddressMinOrderByAggregateInput;
}
