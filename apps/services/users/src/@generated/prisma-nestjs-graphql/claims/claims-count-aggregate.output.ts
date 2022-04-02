import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ClaimsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    sub!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    given_name!: number;

    @Field(() => Int, {nullable:false})
    family_name!: number;

    @Field(() => Int, {nullable:false})
    middle_name!: number;

    @Field(() => Int, {nullable:false})
    nickname!: number;

    @Field(() => Int, {nullable:false})
    preferred_username!: number;

    @Field(() => Int, {nullable:false})
    profile!: number;

    @Field(() => Int, {nullable:false})
    picture!: number;

    @Field(() => Int, {nullable:false})
    website!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    email_verified!: number;

    @Field(() => Int, {nullable:false})
    gender!: number;

    @Field(() => Int, {nullable:false})
    birthdate!: number;

    @Field(() => Int, {nullable:false})
    zoneInfo!: number;

    @Field(() => Int, {nullable:false})
    locale!: number;

    @Field(() => Int, {nullable:false})
    phone_number!: number;

    @Field(() => Int, {nullable:false})
    phone_number_verified!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
