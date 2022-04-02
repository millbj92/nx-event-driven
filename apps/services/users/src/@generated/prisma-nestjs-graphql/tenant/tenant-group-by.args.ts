import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TenantWhereInput } from './tenant-where.input';
import { TenantOrderByWithAggregationInput } from './tenant-order-by-with-aggregation.input';
import { TenantScalarFieldEnum } from './tenant-scalar-field.enum';
import { TenantScalarWhereWithAggregatesInput } from './tenant-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TenantCountAggregateInput } from './tenant-count-aggregate.input';
import { TenantMinAggregateInput } from './tenant-min-aggregate.input';
import { TenantMaxAggregateInput } from './tenant-max-aggregate.input';

@ArgsType()
export class TenantGroupByArgs {

    @Field(() => TenantWhereInput, {nullable:true})
    where?: TenantWhereInput;

    @Field(() => [TenantOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TenantOrderByWithAggregationInput>;

    @Field(() => [TenantScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TenantScalarFieldEnum>;

    @Field(() => TenantScalarWhereWithAggregatesInput, {nullable:true})
    having?: TenantScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TenantCountAggregateInput, {nullable:true})
    _count?: TenantCountAggregateInput;

    @Field(() => TenantMinAggregateInput, {nullable:true})
    _min?: TenantMinAggregateInput;

    @Field(() => TenantMaxAggregateInput, {nullable:true})
    _max?: TenantMaxAggregateInput;
}
