import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageThreadOrderByRelevanceFieldEnum } from './message-thread-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MessageThreadOrderByRelevanceInput {

    @Field(() => [MessageThreadOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof MessageThreadOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
