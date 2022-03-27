import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ThreadOrderByWithRelationAndSearchRelevanceInput } from '../thread/thread-order-by-with-relation-and-search-relevance.input';
import { MessageOrderByRelevanceInput } from './message-order-by-relevance.input';

@InputType()
export class MessageOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    threadId?: keyof typeof SortOrder;

    @Field(() => ThreadOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    thread?: ThreadOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fromId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    participants?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    participantReadIds?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => MessageOrderByRelevanceInput, {nullable:true})
    _relevance?: MessageOrderByRelevanceInput;
}
