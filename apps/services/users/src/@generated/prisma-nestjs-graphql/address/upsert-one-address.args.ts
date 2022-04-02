import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { AddressCreateInput } from './address-create.input';
import { AddressUpdateInput } from './address-update.input';

@ArgsType()
export class UpsertOneAddressArgs {

    @Field(() => AddressWhereUniqueInput, {nullable:false})
    where!: AddressWhereUniqueInput;

    @Field(() => AddressCreateInput, {nullable:false})
    create!: AddressCreateInput;

    @Field(() => AddressUpdateInput, {nullable:false})
    update!: AddressUpdateInput;
}
