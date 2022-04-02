import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantOrderByRelevanceFieldEnum } from './tenant-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TenantOrderByRelevanceInput {

    @Field(() => [TenantOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof TenantOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
