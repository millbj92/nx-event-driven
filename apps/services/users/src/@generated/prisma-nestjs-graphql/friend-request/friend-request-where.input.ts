import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FriendRequestWhereInput {

    @Field(() => [FriendRequestWhereInput], {nullable:true})
    AND?: Array<FriendRequestWhereInput>;

    @Field(() => [FriendRequestWhereInput], {nullable:true})
    OR?: Array<FriendRequestWhereInput>;

    @Field(() => [FriendRequestWhereInput], {nullable:true})
    NOT?: Array<FriendRequestWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    receiverId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    receiver?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    senderId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    sender?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
