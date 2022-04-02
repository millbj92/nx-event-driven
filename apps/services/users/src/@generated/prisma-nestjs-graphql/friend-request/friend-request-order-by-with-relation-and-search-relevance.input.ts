import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { FriendRequestOrderByRelevanceInput } from './friend-request-order-by-relevance.input';

@InputType()
export class FriendRequestOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    receiverId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    receiver?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    senderId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    sender?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FriendRequestOrderByRelevanceInput, {nullable:true})
    _relevance?: FriendRequestOrderByRelevanceInput;
}
