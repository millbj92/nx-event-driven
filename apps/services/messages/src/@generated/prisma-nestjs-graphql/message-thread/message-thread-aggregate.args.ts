import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageThreadWhereInput } from './message-thread-where.input';
import { MessageThreadOrderByWithRelationAndSearchRelevanceInput } from './message-thread-order-by-with-relation-and-search-relevance.input';
import { MessageThreadWhereUniqueInput } from './message-thread-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MessageThreadCountAggregateInput } from './message-thread-count-aggregate.input';
import { MessageThreadMinAggregateInput } from './message-thread-min-aggregate.input';
import { MessageThreadMaxAggregateInput } from './message-thread-max-aggregate.input';

@ArgsType()
export class MessageThreadAggregateArgs {

    @Field(() => MessageThreadWhereInput, {nullable:true})
    where?: MessageThreadWhereInput;

    @Field(() => [MessageThreadOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<MessageThreadOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => MessageThreadWhereUniqueInput, {nullable:true})
    cursor?: MessageThreadWhereUniqueInput;

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
