import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendRequestWhereInput } from './friend-request-where.input';
import { FriendRequestOrderByWithAggregationInput } from './friend-request-order-by-with-aggregation.input';
import { FriendRequestScalarFieldEnum } from './friend-request-scalar-field.enum';
import { FriendRequestScalarWhereWithAggregatesInput } from './friend-request-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FriendRequestCountAggregateInput } from './friend-request-count-aggregate.input';
import { FriendRequestMinAggregateInput } from './friend-request-min-aggregate.input';
import { FriendRequestMaxAggregateInput } from './friend-request-max-aggregate.input';

@ArgsType()
export class FriendRequestGroupByArgs {

    @Field(() => FriendRequestWhereInput, {nullable:true})
    where?: FriendRequestWhereInput;

    @Field(() => [FriendRequestOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FriendRequestOrderByWithAggregationInput>;

    @Field(() => [FriendRequestScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FriendRequestScalarFieldEnum>;

    @Field(() => FriendRequestScalarWhereWithAggregatesInput, {nullable:true})
    having?: FriendRequestScalarWhereWithAggregatesInput;

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
