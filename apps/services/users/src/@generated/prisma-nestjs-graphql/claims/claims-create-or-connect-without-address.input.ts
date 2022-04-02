import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClaimsWhereUniqueInput } from './claims-where-unique.input';
import { ClaimsCreateWithoutAddressInput } from './claims-create-without-address.input';

@InputType()
export class ClaimsCreateOrConnectWithoutAddressInput {

    @Field(() => ClaimsWhereUniqueInput, {nullable:false})
    where!: ClaimsWhereUniqueInput;

    @Field(() => ClaimsCreateWithoutAddressInput, {nullable:false})
    create!: ClaimsCreateWithoutAddressInput;
}
