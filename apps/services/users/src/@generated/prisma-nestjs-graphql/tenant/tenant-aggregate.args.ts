import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TenantWhereInput } from './tenant-where.input';
import { TenantOrderByWithRelationAndSearchRelevanceInput } from './tenant-order-by-with-relation-and-search-relevance.input';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TenantCountAggregateInput } from './tenant-count-aggregate.input';
import { TenantMinAggregateInput } from './tenant-min-aggregate.input';
import { TenantMaxAggregateInput } from './tenant-max-aggregate.input';

@ArgsType()
export class TenantAggregateArgs {

    @Field(() => TenantWhereInput, {nullable:true})
    where?: TenantWhereInput;

    @Field(() => [TenantOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<TenantOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => TenantWhereUniqueInput, {nullable:true})
    cursor?: TenantWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TenantCountAggregateInput, {nullable:true})
    _count?: TenantCountAggregateInput;

    @Field(() => TenantMinAggregateInput, {nullable:true})
    _min?: TenantMinAggregateInput;

    @Field(() => TenantMaxAggregateInput, {nullable:true})
    _max?: TenantMaxAggregateInput;
}
