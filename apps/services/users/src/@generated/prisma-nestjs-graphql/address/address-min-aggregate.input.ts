import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AddressMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    street_address?: true;

    @Field(() => Boolean, {nullable:true})
    locality?: true;

    @Field(() => Boolean, {nullable:true})
    region?: true;

    @Field(() => Boolean, {nullable:true})
    postal_code?: true;

    @Field(() => Boolean, {nullable:true})
    country?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}
