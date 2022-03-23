import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageWhereInput } from './message-where.input';
import { MessageOrderByWithRelationAndSearchRelevanceInput } from './message-order-by-with-relation-and-search-relevance.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MessageCountAggregateInput } from './message-count-aggregate.input';
import { MessageMinAggregateInput } from './message-min-aggregate.input';
import { MessageMaxAggregateInput } from './message-max-aggregate.input';

@ArgsType()
export class MessageAggregateArgs {

    @Field(() => MessageWhereInput, {nullable:true})
    where?: MessageWhereInput;

    @Field(() => [MessageOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<MessageOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => MessageWhereUniqueInput, {nullable:true})
    cursor?: MessageWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MessageCountAggregateInput, {nullable:true})
    _count?: MessageCountAggregateInput;

    @Field(() => MessageMinAggregateInput, {nullable:true})
    _min?: MessageMinAggregateInput;

    @Field(() => MessageMaxAggregateInput, {nullable:true})
    _max?: MessageMaxAggregateInput;
}
