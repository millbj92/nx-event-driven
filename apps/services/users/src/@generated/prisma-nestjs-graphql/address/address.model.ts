import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Address {

    @Field(() => ID, {nullable:false})
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
    updated_at!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
