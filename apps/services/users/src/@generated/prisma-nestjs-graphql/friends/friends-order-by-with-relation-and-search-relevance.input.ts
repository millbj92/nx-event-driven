import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { FriendsOrderByRelevanceInput } from './friends-order-by-relevance.input';

@InputType()
export class FriendsOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    friendUserId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    Users?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    FriendUsers?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => FriendsOrderByRelevanceInput, {nullable:true})
    _relevance?: FriendsOrderByRelevanceInput;
}
