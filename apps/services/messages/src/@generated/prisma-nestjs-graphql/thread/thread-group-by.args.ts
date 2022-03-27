import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadWhereInput } from './thread-where.input';
import { ThreadOrderByWithAggregationInput } from './thread-order-by-with-aggregation.input';
import { ThreadScalarFieldEnum } from './thread-scalar-field.enum';
import { ThreadScalarWhereWithAggregatesInput } from './thread-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ThreadCountAggregateInput } from './thread-count-aggregate.input';
import { ThreadMinAggregateInput } from './thread-min-aggregate.input';
import { ThreadMaxAggregateInput } from './thread-max-aggregate.input';

@ArgsType()
export class ThreadGroupByArgs {

    @Field(() => ThreadWhereInput, {nullable:true})
    where?: ThreadWhereInput;

    @Field(() => [ThreadOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ThreadOrderByWithAggregationInput>;

    @Field(() => [ThreadScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ThreadScalarFieldEnum>;

    @Field(() => ThreadScalarWhereWithAggregatesInput, {nullable:true})
    having?: ThreadScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ThreadCountAggregateInput, {nullable:true})
    _count?: ThreadCountAggregateInput;

    @Field(() => ThreadMinAggregateInput, {nullable:true})
    _min?: ThreadMinAggregateInput;

    @Field(() => ThreadMaxAggregateInput, {nullable:true})
    _max?: ThreadMaxAggregateInput;
}
