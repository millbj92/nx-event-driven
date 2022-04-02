import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FriendsCountOrderByAggregateInput } from './friends-count-order-by-aggregate.input';
import { FriendsMaxOrderByAggregateInput } from './friends-max-order-by-aggregate.input';
import { FriendsMinOrderByAggregateInput } from './friends-min-order-by-aggregate.input';

@InputType()
export class FriendsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    friendUserId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FriendsCountOrderByAggregateInput, {nullable:true})
    _count?: FriendsCountOrderByAggregateInput;

    @Field(() => FriendsMaxOrderByAggregateInput, {nullable:true})
    _max?: FriendsMaxOrderByAggregateInput;

    @Field(() => FriendsMinOrderByAggregateInput, {nullable:true})
    _min?: FriendsMinOrderByAggregateInput;
}
