import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClaimsWhereInput } from './claims-where.input';
import { ClaimsOrderByWithAggregationInput } from './claims-order-by-with-aggregation.input';
import { ClaimsScalarFieldEnum } from './claims-scalar-field.enum';
import { ClaimsScalarWhereWithAggregatesInput } from './claims-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ClaimsCountAggregateInput } from './claims-count-aggregate.input';
import { ClaimsMinAggregateInput } from './claims-min-aggregate.input';
import { ClaimsMaxAggregateInput } from './claims-max-aggregate.input';

@ArgsType()
export class ClaimsGroupByArgs {

    @Field(() => ClaimsWhereInput, {nullable:true})
    where?: ClaimsWhereInput;

    @Field(() => [ClaimsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ClaimsOrderByWithAggregationInput>;

    @Field(() => [ClaimsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ClaimsScalarFieldEnum>;

    @Field(() => ClaimsScalarWhereWithAggregatesInput, {nullable:true})
    having?: ClaimsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ClaimsCountAggregateInput, {nullable:true})
    _count?: ClaimsCountAggregateInput;

    @Field(() => ClaimsMinAggregateInput, {nullable:true})
    _min?: ClaimsMinAggregateInput;

    @Field(() => ClaimsMaxAggregateInput, {nullable:true})
    _max?: ClaimsMaxAggregateInput;
}
