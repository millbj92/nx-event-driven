import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClaimsCreateWithoutAddressInput } from './claims-create-without-address.input';
import { ClaimsCreateOrConnectWithoutAddressInput } from './claims-create-or-connect-without-address.input';
import { ClaimsWhereUniqueInput } from './claims-where-unique.input';

@InputType()
export class ClaimsCreateNestedOneWithoutAddressInput {

    @Field(() => ClaimsCreateWithoutAddressInput, {nullable:true})
    create?: ClaimsCreateWithoutAddressInput;

    @Field(() => ClaimsCreateOrConnectWithoutAddressInput, {nullable:true})
    connectOrCreate?: ClaimsCreateOrConnectWithoutAddressInput;

    @Field(() => ClaimsWhereUniqueInput, {nullable:true})
    connect?: ClaimsWhereUniqueInput;
}
