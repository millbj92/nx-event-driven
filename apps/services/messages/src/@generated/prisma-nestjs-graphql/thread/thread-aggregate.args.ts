import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadWhereInput } from './thread-where.input';
import { ThreadOrderByWithRelationAndSearchRelevanceInput } from './thread-order-by-with-relation-and-search-relevance.input';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ThreadCountAggregateInput } from './thread-count-aggregate.input';
import { ThreadMinAggregateInput } from './thread-min-aggregate.input';
import { ThreadMaxAggregateInput } from './thread-max-aggregate.input';

@ArgsType()
export class ThreadAggregateArgs {

    @Field(() => ThreadWhereInput, {nullable:true})
    where?: ThreadWhereInput;

    @Field(() => [ThreadOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<ThreadOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => ThreadWhereUniqueInput, {nullable:true})
    cursor?: ThreadWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ThreadCountAggregateInput, {nullable:true})
    _count?: ThreadCountAggregateInput;

    @Field(() => ThreadMinAggregateInput, {nullable:true})
    _min?: ThreadMinAggregateInput;

    @Field(() => ThreadMaxAggregateInput, {nullable:true})
    _max?: ThreadMaxAggregateInput;
}
