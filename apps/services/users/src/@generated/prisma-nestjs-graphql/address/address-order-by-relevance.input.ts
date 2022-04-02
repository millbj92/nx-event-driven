import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AddressOrderByRelevanceFieldEnum } from './address-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AddressOrderByRelevanceInput {

    @Field(() => [AddressOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof AddressOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
