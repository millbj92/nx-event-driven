import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressCreateWithoutClaimsInput } from './address-create-without-claims.input';
import { AddressCreateOrConnectWithoutClaimsInput } from './address-create-or-connect-without-claims.input';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@InputType()
export class AddressCreateNestedOneWithoutClaimsInput {

    @Field(() => AddressCreateWithoutClaimsInput, {nullable:true})
    create?: AddressCreateWithoutClaimsInput;

    @Field(() => AddressCreateOrConnectWithoutClaimsInput, {nullable:true})
    connectOrCreate?: AddressCreateOrConnectWithoutClaimsInput;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    connect?: AddressWhereUniqueInput;
}
