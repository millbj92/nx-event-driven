import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @Field(() => Boolean, {nullable:true})
    verified?: true;

    @Field(() => Boolean, {nullable:true})
    verification?: true;

    @Field(() => Boolean, {nullable:true})
    isActive?: true;

    @Field(() => Boolean, {nullable:true})
    isBanned?: true;

    @Field(() => Boolean, {nullable:true})
    middle_name?: true;

    @Field(() => Boolean, {nullable:true})
    nickname?: true;

    @Field(() => Boolean, {nullable:true})
    preferred_username?: true;

    @Field(() => Boolean, {nullable:true})
    profile?: true;

    @Field(() => Boolean, {nullable:true})
    picture?: true;

    @Field(() => Boolean, {nullable:true})
    website?: true;

    @Field(() => Boolean, {nullable:true})
    gender?: true;

    @Field(() => Boolean, {nullable:true})
    birthdate?: true;

    @Field(() => Boolean, {nullable:true})
    zoneInfo?: true;

    @Field(() => Boolean, {nullable:true})
    locale?: true;

    @Field(() => Boolean, {nullable:true})
    phone_number?: true;

    @Field(() => Boolean, {nullable:true})
    phone_number_verified?: true;

    @Field(() => Boolean, {nullable:true})
    firstName?: true;

    @Field(() => Boolean, {nullable:true})
    lastName?: true;

    @Field(() => Boolean, {nullable:true})
    banDuration?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
