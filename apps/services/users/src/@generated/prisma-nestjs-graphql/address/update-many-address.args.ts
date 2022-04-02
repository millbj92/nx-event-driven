import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressUpdateManyMutationInput } from './address-update-many-mutation.input';
import { AddressWhereInput } from './address-where.input';

@ArgsType()
export class UpdateManyAddressArgs {

    @Field(() => AddressUpdateManyMutationInput, {nullable:false})
    data!: AddressUpdateManyMutationInput;

    @Field(() => AddressWhereInput, {nullable:true})
    where?: AddressWhereInput;
}
