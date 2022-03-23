import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MessageScalarWhereWithAggregatesInput {

    @Field(() => [MessageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MessageScalarWhereWithAggregatesInput>;

    @Field(() => [MessageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MessageScalarWhereWithAggregatesInput>;

    @Field(() => [MessageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MessageScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    text?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    read?: BoolWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    userIds?: StringNullableListFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
