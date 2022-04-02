import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ClaimsCountAggregate } from './claims-count-aggregate.output';
import { ClaimsMinAggregate } from './claims-min-aggregate.output';
import { ClaimsMaxAggregate } from './claims-max-aggregate.output';

@ObjectType()
export class ClaimsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    sub!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    given_name?: string;

    @Field(() => String, {nullable:true})
    family_name?: string;

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
    email?: string;

    @Field(() => String, {nullable:true})
    email_verified?: string;

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

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => ClaimsCountAggregate, {nullable:true})
    _count?: ClaimsCountAggregate;

    @Field(() => ClaimsMinAggregate, {nullable:true})
    _min?: ClaimsMinAggregate;

    @Field(() => ClaimsMaxAggregate, {nullable:true})
    _max?: ClaimsMaxAggregate;
}
