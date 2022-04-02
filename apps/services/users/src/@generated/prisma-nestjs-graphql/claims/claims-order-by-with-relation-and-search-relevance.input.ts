import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { AddressOrderByWithRelationAndSearchRelevanceInput } from '../address/address-order-by-with-relation-and-search-relevance.input';
import { ClaimsOrderByRelevanceInput } from './claims-order-by-relevance.input';

@InputType()
export class ClaimsOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    user?: UserOrderByWithRelationAndSearchRelevanceInput;

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

    @Field(() => AddressOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    address?: AddressOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => ClaimsOrderByRelevanceInput, {nullable:true})
    _relevance?: ClaimsOrderByRelevanceInput;
}
