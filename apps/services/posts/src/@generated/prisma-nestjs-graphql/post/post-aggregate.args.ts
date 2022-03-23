import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostWhereInput } from './post-where.input';
import { PostOrderByWithRelationAndSearchRelevanceInput } from './post-order-by-with-relation-and-search-relevance.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PostCountAggregateInput } from './post-count-aggregate.input';
import { PostMinAggregateInput } from './post-min-aggregate.input';
import { PostMaxAggregateInput } from './post-max-aggregate.input';

@ArgsType()
export class PostAggregateArgs {

    @Field(() => PostWhereInput, {nullable:true})
    where?: PostWhereInput;

    @Field(() => [PostOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<PostOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    cursor?: PostWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PostCountAggregateInput, {nullable:true})
    _count?: PostCountAggregateInput;

    @Field(() => PostMinAggregateInput, {nullable:true})
    _min?: PostMinAggregateInput;

    @Field(() => PostMaxAggregateInput, {nullable:true})
    _max?: PostMaxAggregateInput;
}
