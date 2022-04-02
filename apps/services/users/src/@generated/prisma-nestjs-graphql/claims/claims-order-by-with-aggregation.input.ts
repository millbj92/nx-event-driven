import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ClaimsCountOrderByAggregateInput } from './claims-count-order-by-aggregate.input';
import { ClaimsMaxOrderByAggregateInput } from './claims-max-order-by-aggregate.input';
import { ClaimsMinOrderByAggregateInput } from './claims-min-order-by-aggregate.input';

@InputType()
export class ClaimsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sub?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    given_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    family_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    middle_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    nickname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    preferred_username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profile?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    picture?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    website?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email_verified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    birthdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    zoneInfo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone_number_verified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ClaimsCountOrderByAggregateInput, {nullable:true})
    _count?: ClaimsCountOrderByAggregateInput;

    @Field(() => ClaimsMaxOrderByAggregateInput, {nullable:true})
    _max?: ClaimsMaxOrderByAggregateInput;

    @Field(() => ClaimsMinOrderByAggregateInput, {nullable:true})
    _min?: ClaimsMinOrderByAggregateInput;
}
