import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClaimsOrderByRelevanceFieldEnum } from './claims-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ClaimsOrderByRelevanceInput {

    @Field(() => [ClaimsOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof ClaimsOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
