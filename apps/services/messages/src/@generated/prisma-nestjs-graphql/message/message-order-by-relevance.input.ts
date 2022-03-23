import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageOrderByRelevanceFieldEnum } from './message-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MessageOrderByRelevanceInput {

    @Field(() => [MessageOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof MessageOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
