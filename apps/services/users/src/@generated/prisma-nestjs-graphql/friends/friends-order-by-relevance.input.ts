import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendsOrderByRelevanceFieldEnum } from './friends-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FriendsOrderByRelevanceInput {

    @Field(() => [FriendsOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof FriendsOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
