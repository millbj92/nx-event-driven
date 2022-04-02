import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressCreateInput } from './address-create.input';

@ArgsType()
export class CreateOneAddressArgs {

    @Field(() => AddressCreateInput, {nullable:false})
    data!: AddressCreateInput;
}
