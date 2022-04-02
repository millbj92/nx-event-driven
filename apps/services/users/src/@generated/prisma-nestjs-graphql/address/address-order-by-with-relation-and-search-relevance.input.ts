import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AddressOrderByRelevanceInput } from './address-order-by-relevance.input';

@InputType()
export class AddressOrderByWithRelationAndSearchRelevanceInput {

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

    @Field(() => AddressOrderByRelevanceInput, {nullable:true})
    _relevance?: AddressOrderByRelevanceInput;
}
