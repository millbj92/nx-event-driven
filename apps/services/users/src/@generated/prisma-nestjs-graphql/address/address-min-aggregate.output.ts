import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AddressMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    street_address?: string;

    @Field(() => String, {nullable:true})
    locality?: string;

    @Field(() => String, {nullable:true})
    region?: string;

    @Field(() => String, {nullable:true})
    postal_code?: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
