import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendsWhereInput } from './friends-where.input';
import { FriendsOrderByWithRelationAndSearchRelevanceInput } from './friends-order-by-with-relation-and-search-relevance.input';
import { FriendsWhereUniqueInput } from './friends-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FriendsCountAggregateInput } from './friends-count-aggregate.input';
import { FriendsMinAggregateInput } from './friends-min-aggregate.input';
import { FriendsMaxAggregateInput } from './friends-max-aggregate.input';

@ArgsType()
export class FriendsAggregateArgs {

    @Field(() => FriendsWhereInput, {nullable:true})
    where?: FriendsWhereInput;

    @Field(() => [FriendsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<FriendsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => FriendsWhereUniqueInput, {nullable:true})
    cursor?: FriendsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FriendsCountAggregateInput, {nullable:true})
    _count?: FriendsCountAggregateInput;

    @Field(() => FriendsMinAggregateInput, {nullable:true})
    _min?: FriendsMinAggregateInput;

    @Field(() => FriendsMaxAggregateInput, {nullable:true})
    _max?: FriendsMaxAggregateInput;
}
