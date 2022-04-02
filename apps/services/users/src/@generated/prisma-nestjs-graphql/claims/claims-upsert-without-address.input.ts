import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClaimsUpdateWithoutAddressInput } from './claims-update-without-address.input';
import { ClaimsCreateWithoutAddressInput } from './claims-create-without-address.input';

@InputType()
export class ClaimsUpsertWithoutAddressInput {

    @Field(() => ClaimsUpdateWithoutAddressInput, {nullable:false})
    update!: ClaimsUpdateWithoutAddressInput;

    @Field(() => ClaimsCreateWithoutAddressInput, {nullable:false})
    create!: ClaimsCreateWithoutAddressInput;
}
