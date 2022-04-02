import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FriendsScalarWhereInput {

    @Field(() => [FriendsScalarWhereInput], {nullable:true})
    AND?: Array<FriendsScalarWhereInput>;

    @Field(() => [FriendsScalarWhereInput], {nullable:true})
    OR?: Array<FriendsScalarWhereInput>;

    @Field(() => [FriendsScalarWhereInput], {nullable:true})
    NOT?: Array<FriendsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    friendUserId?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    status?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
