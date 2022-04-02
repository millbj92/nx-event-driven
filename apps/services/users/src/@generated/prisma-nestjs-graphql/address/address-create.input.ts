import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AddressCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
