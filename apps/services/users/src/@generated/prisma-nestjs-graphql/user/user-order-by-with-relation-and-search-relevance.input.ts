import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FriendRequestOrderByRelationAggregateInput } from '../friend-request/friend-request-order-by-relation-aggregate.input';
import { FriendsOrderByRelationAggregateInput } from '../friends/friends-order-by-relation-aggregate.input';
import { UserOrderByRelevanceInput } from './user-order-by-relevance.input';

@InputType()
export class UserOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    verified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    verification?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isBanned?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    middle_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    nickname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    preferred_username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profile?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    picture?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    website?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    birthdate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    zoneInfo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone_number_verified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    banDuration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    friendRequestIds?: keyof typeof SortOrder;

    @Field(() => FriendRequestOrderByRelationAggregateInput, {nullable:true})
    friendRequests?: FriendRequestOrderByRelationAggregateInput;

    @Field(() => FriendRequestOrderByRelationAggregateInput, {nullable:true})
    friendRequestsSent?: FriendRequestOrderByRelationAggregateInput;

    @Field(() => FriendsOrderByRelationAggregateInput, {nullable:true})
    userFriends?: FriendsOrderByRelationAggregateInput;

    @Field(() => FriendsOrderByRelationAggregateInput, {nullable:true})
    friendUserFriends?: FriendsOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByRelevanceInput, {nullable:true})
    _relevance?: UserOrderByRelevanceInput;
}
