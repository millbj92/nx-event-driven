import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressCreateManyInput } from './address-create-many.input';

@ArgsType()
export class CreateManyAddressArgs {

    @Field(() => [AddressCreateManyInput], {nullable:false})
    data!: Array<AddressCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
