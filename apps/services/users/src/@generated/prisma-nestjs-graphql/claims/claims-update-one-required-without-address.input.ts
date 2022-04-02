import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClaimsCreateWithoutAddressInput } from './claims-create-without-address.input';
import { ClaimsCreateOrConnectWithoutAddressInput } from './claims-create-or-connect-without-address.input';
import { ClaimsUpsertWithoutAddressInput } from './claims-upsert-without-address.input';
import { ClaimsWhereUniqueInput } from './claims-where-unique.input';
import { ClaimsUpdateWithoutAddressInput } from './claims-update-without-address.input';

@InputType()
export class ClaimsUpdateOneRequiredWithoutAddressInput {

    @Field(() => ClaimsCreateWithoutAddressInput, {nullable:true})
    create?: ClaimsCreateWithoutAddressInput;

    @Field(() => ClaimsCreateOrConnectWithoutAddressInput, {nullable:true})
    connectOrCreate?: ClaimsCreateOrConnectWithoutAddressInput;

    @Field(() => ClaimsUpsertWithoutAddressInput, {nullable:true})
    upsert?: ClaimsUpsertWithoutAddressInput;

    @Field(() => ClaimsWhereUniqueInput, {nullable:true})
    connect?: ClaimsWhereUniqueInput;

    @Field(() => ClaimsUpdateWithoutAddressInput, {nullable:true})
    update?: ClaimsUpdateWithoutAddressInput;
}
