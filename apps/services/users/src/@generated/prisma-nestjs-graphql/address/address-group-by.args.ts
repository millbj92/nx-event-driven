import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AddressWhereInput } from './address-where.input';
import { AddressOrderByWithAggregationInput } from './address-order-by-with-aggregation.input';
import { AddressScalarFieldEnum } from './address-scalar-field.enum';
import { AddressScalarWhereWithAggregatesInput } from './address-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AddressCountAggregateInput } from './address-count-aggregate.input';
import { AddressMinAggregateInput } from './address-min-aggregate.input';
import { AddressMaxAggregateInput } from './address-max-aggregate.input';

@ArgsType()
export class AddressGroupByArgs {

    @Field(() => AddressWhereInput, {nullable:true})
    where?: AddressWhereInput;

    @Field(() => [AddressOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AddressOrderByWithAggregationInput>;

    @Field(() => [AddressScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AddressScalarFieldEnum>;

    @Field(() => AddressScalarWhereWithAggregatesInput, {nullable:true})
    having?: AddressScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AddressCountAggregateInput, {nullable:true})
    _count?: AddressCountAggregateInput;

    @Field(() => AddressMinAggregateInput, {nullable:true})
    _min?: AddressMinAggregateInput;

    @Field(() => AddressMaxAggregateInput, {nullable:true})
    _max?: AddressMaxAggregateInput;
}
