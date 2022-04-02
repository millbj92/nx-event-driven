import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestOrderByRelevanceFieldEnum } from './friend-request-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FriendRequestOrderByRelevanceInput {

    @Field(() => [FriendRequestOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<keyof typeof FriendRequestOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;

    @Field(() => String, {nullable:false})
    search!: string;
}
