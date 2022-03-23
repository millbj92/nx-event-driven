import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileOrderByRelevanceFieldEnum } from './file-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FileOrderByRelevanceInput {

    @Field(() => [FileOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof FileOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
