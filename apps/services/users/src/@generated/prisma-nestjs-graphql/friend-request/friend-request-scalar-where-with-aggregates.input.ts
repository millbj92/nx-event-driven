import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FriendRequestScalarWhereWithAggregatesInput {

    @Field(() => [FriendRequestScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FriendRequestScalarWhereWithAggregatesInput>;

    @Field(() => [FriendRequestScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FriendRequestScalarWhereWithAggregatesInput>;

    @Field(() => [FriendRequestScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FriendRequestScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    receiverId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    senderId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    status?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
