import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutClaimsInput } from './address-create-without-claims.input';
import { AddressCreateOrConnectWithoutClaimsInput } from './address-create-or-connect-without-claims.input';
import { AddressUpsertWithoutClaimsInput } from './address-upsert-without-claims.input';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressUpdateWithoutClaimsInput } from './address-update-without-claims.input';

@InputType()
export class AddressUpdateOneWithoutClaimsInput {

    @Field(() => AddressCreateWithoutClaimsInput, {nullable:true})
    create?: AddressCreateWithoutClaimsInput;

    @Field(() => AddressCreateOrConnectWithoutClaimsInput, {nullable:true})
    connectOrCreate?: AddressCreateOrConnectWithoutClaimsInput;

    @Field(() => AddressUpsertWithoutClaimsInput, {nullable:true})
    upsert?: AddressUpsertWithoutClaimsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    connect?: AddressWhereUniqueInput;

    @Field(() => AddressUpdateWithoutClaimsInput, {nullable:true})
    update?: AddressUpdateWithoutClaimsInput;
}
