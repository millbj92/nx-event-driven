import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';

@InputType()
export class AddressRelationFilter {

    @Field(() => AddressWhereInput, {nullable:true})
    is?: AddressWhereInput;

    @Field(() => AddressWhereInput, {nullable:true})
    isNot?: AddressWhereInput;
}
