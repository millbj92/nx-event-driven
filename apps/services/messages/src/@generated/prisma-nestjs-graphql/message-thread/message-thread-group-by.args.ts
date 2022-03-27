import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageThreadWhereInput } from './message-thread-where.input';
import { MessageThreadOrderByWithAggregationInput } from './message-thread-order-by-with-aggregation.input';
import { MessageThreadScalarFieldEnum } from './message-thread-scalar-field.enum';
import { MessageThreadScalarWhereWithAggregatesInput } from './message-thread-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MessageThreadCountAggregateInput } from './message-thread-count-aggregate.input';
import { MessageThreadMinAggregateInput } from './message-thread-min-aggregate.input';
import { MessageThreadMaxAggregateInput } from './message-thread-max-aggregate.input';

@ArgsType()
export class MessageThreadGroupByArgs {

    @Field(() => MessageThreadWhereInput, {nullable:true})
    where?: MessageThreadWhereInput;

    @Field(() => [MessageThreadOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MessageThreadOrderByWithAggregationInput>;

    @Field(() => [MessageThreadScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MessageThreadScalarFieldEnum>;

    @Field(() => MessageThreadScalarWhereWithAggregatesInput, {nullable:true})
    having?: MessageThreadScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MessageThreadCountAggregateInput, {nullable:true})
    _count?: MessageThreadCountAggregateInput;

    @Field(() => MessageThreadMinAggregateInput, {nullable:true})
    _min?: MessageThreadMinAggregateInput;

    @Field(() => MessageThreadMaxAggregateInput, {nullable:true})
    _max?: MessageThreadMaxAggregateInput;
}
