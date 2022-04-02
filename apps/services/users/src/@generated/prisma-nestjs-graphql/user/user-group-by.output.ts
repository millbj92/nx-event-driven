import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserAvgAggregate } from './user-avg-aggregate.output';
import { UserSumAggregate } from './user-sum-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';

@ObjectType()
export class UserGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Boolean, {nullable:false})
    verified!: boolean;

    @Field(() => String, {nullable:false})
    verification!: string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => Boolean, {nullable:false})
    isBanned!: boolean;

    @Field(() => String, {nullable:true})
    middle_name?: string;

    @Field(() => String, {nullable:true})
    nickname?: string;

    @Field(() => String, {nullable:true})
    preferred_username?: string;

    @Field(() => String, {nullable:true})
    profile?: string;

    @Field(() => String, {nullable:false})
    picture!: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => String, {nullable:true})
    gender?: string;

    @Field(() => Date, {nullable:true})
    birthdate?: Date | string;

    @Field(() => String, {nullable:true})
    zoneInfo?: string;

    @Field(() => String, {nullable:true})
    locale?: string;

    @Field(() => String, {nullable:true})
    phone_number?: string;

    @Field(() => Boolean, {nullable:false})
    phone_number_verified!: boolean;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => Int, {nullable:false})
    banDuration!: number;

    @Field(() => [String], {nullable:true})
    friendRequestIds?: Array<string>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => UserCountAggregate, {nullable:true})
    _count?: UserCountAggregate;

    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: UserAvgAggregate;

    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: UserSumAggregate;

    @Field(() => UserMinAggregate, {nullable:true})
    _min?: UserMinAggregate;

    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: UserMaxAggregate;
}
