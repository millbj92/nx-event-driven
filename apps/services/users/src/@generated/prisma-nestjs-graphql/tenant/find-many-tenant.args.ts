import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TenantWhereInput } from './tenant-where.input';
import { TenantOrderByWithRelationAndSearchRelevanceInput } from './tenant-order-by-with-relation-and-search-relevance.input';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TenantScalarFieldEnum } from './tenant-scalar-field.enum';

@ArgsType()
export class FindManyTenantArgs {

    @Field(() => TenantWhereInput, {nullable:true})
    where?: TenantWhereInput;

    @Field(() => [TenantOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<TenantOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => TenantWhereUniqueInput, {nullable:true})
    cursor?: TenantWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TenantScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TenantScalarFieldEnum>;
}
