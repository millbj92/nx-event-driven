import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressUpdateWithoutClaimsInput } from './address-update-without-claims.input';
import { AddressCreateWithoutClaimsInput } from './address-create-without-claims.input';

@InputType()
export class AddressUpsertWithoutClaimsInput {

    @Field(() => AddressUpdateWithoutClaimsInput, {nullable:false})
    update!: AddressUpdateWithoutClaimsInput;

    @Field(() => AddressCreateWithoutClaimsInput, {nullable:false})
    create!: AddressCreateWithoutClaimsInput;
}
