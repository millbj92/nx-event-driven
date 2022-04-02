import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';

@ArgsType()
export class DeleteManyAddressArgs {

    @Field(() => AddressWhereInput, {nullable:true})
    where?: AddressWhereInput;
}
