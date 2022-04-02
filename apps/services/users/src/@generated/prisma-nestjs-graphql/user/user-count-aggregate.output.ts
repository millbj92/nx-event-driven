import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    password!: number;

    @Field(() => Int, {nullable:false})
    verified!: number;

    @Field(() => Int, {nullable:false})
    verification!: number;

    @Field(() => Int, {nullable:false})
    isActive!: number;

    @Field(() => Int, {nullable:false})
    isBanned!: number;

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
    firstName!: number;

    @Field(() => Int, {nullable:false})
    lastName!: number;

    @Field(() => Int, {nullable:false})
    banDuration!: number;

    @Field(() => Int, {nullable:false})
    friendRequestIds!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
