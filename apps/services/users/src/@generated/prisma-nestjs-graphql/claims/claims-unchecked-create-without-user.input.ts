import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressUncheckedCreateNestedOneWithoutClaimsInput } from '../address/address-unchecked-create-nested-one-without-claims.input';

@InputType()
export class ClaimsUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => String, {nullable:true})
    picture?: string;

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

    @Field(() => Boolean, {nullable:true})
    phone_number_verified?: boolean;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => AddressUncheckedCreateNestedOneWithoutClaimsInput, {nullable:true})
    address?: AddressUncheckedCreateNestedOneWithoutClaimsInput;
}
