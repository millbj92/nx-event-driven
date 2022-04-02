import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AddressRelationFilter } from '../address/address-relation-filter.input';

@InputType()
export class ClaimsWhereInput {

    @Field(() => [ClaimsWhereInput], {nullable:true})
    AND?: Array<ClaimsWhereInput>;

    @Field(() => [ClaimsWhereInput], {nullable:true})
    OR?: Array<ClaimsWhereInput>;

    @Field(() => [ClaimsWhereInput], {nullable:true})
    NOT?: Array<ClaimsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    sub?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    given_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    family_name?: StringNullableFilter;

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
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email_verified?: StringNullableFilter;

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

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => AddressRelationFilter, {nullable:true})
    address?: AddressRelationFilter;
}
