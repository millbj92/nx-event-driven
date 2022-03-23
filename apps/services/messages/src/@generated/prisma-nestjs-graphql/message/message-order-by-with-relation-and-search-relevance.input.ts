import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MessageOrderByRelevanceInput } from './message-order-by-relevance.input';

@InputType()
export class MessageOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    read?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userIds?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => MessageOrderByRelevanceInput, {nullable:true})
    _relevance?: MessageOrderByRelevanceInput;
}
