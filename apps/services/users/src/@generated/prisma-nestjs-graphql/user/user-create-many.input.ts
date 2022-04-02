import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreatefriendRequestIdsInput } from '../prisma/user-createfriend-request-ids.input';

@InputType()
export class UserCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Boolean, {nullable:true})
    verified?: boolean;

    @Field(() => String, {nullable:false})
    verification!: string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Boolean, {nullable:true})
    isBanned?: boolean;

    @Field(() => String, {nullable:true})
    middle_name?: string;

    @Field(() => String, {nullable:true})
    nickname?: string;

    @Field(() => String, {nullable:true})
    preferred_username?: string;

    @Field(() => String, {nullable:true})
    profile?: string;

    @Field(() => String, {nullable:true})
    picture?: string;

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

    @Field(() => Boolean, {nullable:true})
    phone_number_verified?: boolean;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => Int, {nullable:true})
    banDuration?: number;

    @Field(() => UserCreatefriendRequestIdsInput, {nullable:true})
    friendRequestIds?: UserCreatefriendRequestIdsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
