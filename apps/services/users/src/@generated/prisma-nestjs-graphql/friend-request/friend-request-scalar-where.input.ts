import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FriendRequestScalarWhereInput {

    @Field(() => [FriendRequestScalarWhereInput], {nullable:true})
    AND?: Array<FriendRequestScalarWhereInput>;

    @Field(() => [FriendRequestScalarWhereInput], {nullable:true})
    OR?: Array<FriendRequestScalarWhereInput>;

    @Field(() => [FriendRequestScalarWhereInput], {nullable:true})
    NOT?: Array<FriendRequestScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    receiverId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    senderId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
