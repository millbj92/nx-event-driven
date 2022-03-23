import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostOrderByRelevanceFieldEnum } from './post-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PostOrderByRelevanceInput {

    @Field(() => [PostOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof PostOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
