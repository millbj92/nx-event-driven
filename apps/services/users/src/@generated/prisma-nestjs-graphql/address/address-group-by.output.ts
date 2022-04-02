import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AddressCountAggregate } from './address-count-aggregate.output';
import { AddressMinAggregate } from './address-min-aggregate.output';
import { AddressMaxAggregate } from './address-max-aggregate.output';

@ObjectType()
export class AddressGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    street_address!: string;

    @Field(() => String, {nullable:false})
    locality!: string;

    @Field(() => String, {nullable:false})
    region!: string;

    @Field(() => String, {nullable:false})
    postal_code!: string;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => AddressCountAggregate, {nullable:true})
    _count?: AddressCountAggregate;

    @Field(() => AddressMinAggregate, {nullable:true})
    _min?: AddressMinAggregate;

    @Field(() => AddressMaxAggregate, {nullable:true})
    _max?: AddressMaxAggregate;
}
