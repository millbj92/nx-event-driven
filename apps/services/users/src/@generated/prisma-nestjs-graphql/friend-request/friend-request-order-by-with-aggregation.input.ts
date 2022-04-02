import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FriendRequestCountOrderByAggregateInput } from './friend-request-count-order-by-aggregate.input';
import { FriendRequestMaxOrderByAggregateInput } from './friend-request-max-order-by-aggregate.input';
import { FriendRequestMinOrderByAggregateInput } from './friend-request-min-order-by-aggregate.input';

@InputType()
export class FriendRequestOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    receiverId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    senderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FriendRequestCountOrderByAggregateInput, {nullable:true})
    _count?: FriendRequestCountOrderByAggregateInput;

    @Field(() => FriendRequestMaxOrderByAggregateInput, {nullable:true})
    _max?: FriendRequestMaxOrderByAggregateInput;

    @Field(() => FriendRequestMinOrderByAggregateInput, {nullable:true})
    _min?: FriendRequestMinOrderByAggregateInput;
}
