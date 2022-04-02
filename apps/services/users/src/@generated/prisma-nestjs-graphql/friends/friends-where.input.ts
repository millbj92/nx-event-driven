import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FriendsWhereInput {

    @Field(() => [FriendsWhereInput], {nullable:true})
    AND?: Array<FriendsWhereInput>;

    @Field(() => [FriendsWhereInput], {nullable:true})
    OR?: Array<FriendsWhereInput>;

    @Field(() => [FriendsWhereInput], {nullable:true})
    NOT?: Array<FriendsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    friendUserId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    Users?: UserRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    FriendUsers?: UserRelationFilter;

    @Field(() => BoolFilter, {nullable:true})
    status?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
