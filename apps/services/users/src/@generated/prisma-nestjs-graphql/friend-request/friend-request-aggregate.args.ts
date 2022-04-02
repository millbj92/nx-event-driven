import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendRequestWhereInput } from './friend-request-where.input';
import { FriendRequestOrderByWithRelationAndSearchRelevanceInput } from './friend-request-order-by-with-relation-and-search-relevance.input';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FriendRequestCountAggregateInput } from './friend-request-count-aggregate.input';
import { FriendRequestMinAggregateInput } from './friend-request-min-aggregate.input';
import { FriendRequestMaxAggregateInput } from './friend-request-max-aggregate.input';

@ArgsType()
export class FriendRequestAggregateArgs {

    @Field(() => FriendRequestWhereInput, {nullable:true})
    where?: FriendRequestWhereInput;

    @Field(() => [FriendRequestOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<FriendRequestOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => FriendRequestWhereUniqueInput, {nullable:true})
    cursor?: FriendRequestWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FriendRequestCountAggregateInput, {nullable:true})
    _count?: FriendRequestCountAggregateInput;

    @Field(() => FriendRequestMinAggregateInput, {nullable:true})
    _min?: FriendRequestMinAggregateInput;

    @Field(() => FriendRequestMaxAggregateInput, {nullable:true})
    _max?: FriendRequestMaxAggregateInput;
}
