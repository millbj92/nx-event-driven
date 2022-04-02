import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { AddressOrderByWithRelationAndSearchRelevanceInput } from './address-order-by-with-relation-and-search-relevance.input';
import { AddressWhereUniqueInput } from './address-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AddressScalarFieldEnum } from './address-scalar-field.enum';

@ArgsType()
export class FindManyAddressArgs {

    @Field(() => AddressWhereInput, {nullable:true})
    where?: AddressWhereInput;

    @Field(() => [AddressOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<AddressOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => AddressWhereUniqueInput, {nullable:true})
    cursor?: AddressWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AddressScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AddressScalarFieldEnum>;
}
