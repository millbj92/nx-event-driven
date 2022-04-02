import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClaimsWhereInput } from './claims-where.input';
import { ClaimsOrderByWithRelationAndSearchRelevanceInput } from './claims-order-by-with-relation-and-search-relevance.input';
import { ClaimsWhereUniqueInput } from './claims-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClaimsCountAggregateInput } from './claims-count-aggregate.input';
import { ClaimsMinAggregateInput } from './claims-min-aggregate.input';
import { ClaimsMaxAggregateInput } from './claims-max-aggregate.input';

@ArgsType()
export class ClaimsAggregateArgs {

    @Field(() => ClaimsWhereInput, {nullable:true})
    where?: ClaimsWhereInput;

    @Field(() => [ClaimsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<ClaimsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => ClaimsWhereUniqueInput, {nullable:true})
    cursor?: ClaimsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ClaimsCountAggregateInput, {nullable:true})
    _count?: ClaimsCountAggregateInput;

    @Field(() => ClaimsMinAggregateInput, {nullable:true})
    _min?: ClaimsMinAggregateInput;

    @Field(() => ClaimsMaxAggregateInput, {nullable:true})
    _max?: ClaimsMaxAggregateInput;
}
