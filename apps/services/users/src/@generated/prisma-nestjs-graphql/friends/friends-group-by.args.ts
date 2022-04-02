import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendsWhereInput } from './friends-where.input';
import { FriendsOrderByWithAggregationInput } from './friends-order-by-with-aggregation.input';
import { FriendsScalarFieldEnum } from './friends-scalar-field.enum';
import { FriendsScalarWhereWithAggregatesInput } from './friends-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FriendsCountAggregateInput } from './friends-count-aggregate.input';
import { FriendsMinAggregateInput } from './friends-min-aggregate.input';
import { FriendsMaxAggregateInput } from './friends-max-aggregate.input';

@ArgsType()
export class FriendsGroupByArgs {

    @Field(() => FriendsWhereInput, {nullable:true})
    where?: FriendsWhereInput;

    @Field(() => [FriendsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FriendsOrderByWithAggregationInput>;

    @Field(() => [FriendsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FriendsScalarFieldEnum>;

    @Field(() => FriendsScalarWhereWithAggregatesInput, {nullable:true})
    having?: FriendsScalarWhereWithAggregatesInput;

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
