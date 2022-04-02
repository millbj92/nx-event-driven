import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressUpdateInput } from './address-update.input';
import { AddressWhereUniqueInput } from './address-where-unique.input';

@ArgsType()
export class UpdateOneAddressArgs {

    @Field(() => AddressUpdateInput, {nullable:false})
    data!: AddressUpdateInput;

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    where!: AddressWhereUniqueInput;
}
