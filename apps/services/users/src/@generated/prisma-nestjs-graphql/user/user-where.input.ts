import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { FriendRequestListRelationFilter } from '../friend-request/friend-request-list-relation-filter.input';
import { FriendsListRelationFilter } from '../friends/friends-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    verified?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    verification?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isBanned?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    middle_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    nickname?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    preferred_username?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profile?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    picture?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    website?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    gender?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    birthdate?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    zoneInfo?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    locale?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone_number?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    phone_number_verified?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    banDuration?: IntFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    friendRequestIds?: StringNullableListFilter;

    @Field(() => FriendRequestListRelationFilter, {nullable:true})
    friendRequests?: FriendRequestListRelationFilter;

    @Field(() => FriendRequestListRelationFilter, {nullable:true})
    friendRequestsSent?: FriendRequestListRelationFilter;

    @Field(() => FriendsListRelationFilter, {nullable:true})
    userFriends?: FriendsListRelationFilter;

    @Field(() => FriendsListRelationFilter, {nullable:true})
    friendUserFriends?: FriendsListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
