import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadOrderByRelevanceFieldEnum } from './thread-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ThreadOrderByRelevanceInput {

    @Field(() => [ThreadOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof ThreadOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
