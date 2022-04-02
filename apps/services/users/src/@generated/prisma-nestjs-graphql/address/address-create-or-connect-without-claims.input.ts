import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressCreateWithoutClaimsInput } from './address-create-without-claims.input';

@InputType()
export class AddressCreateOrConnectWithoutClaimsInput {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    where!: AddressWhereUniqueInput;

    @Field(() => AddressCreateWithoutClaimsInput, {nullable:false})
    create!: AddressCreateWithoutClaimsInput;
}
