import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
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
    threadId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    text?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fromId?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    participants?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    participantReadIds?: StringNullableListFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
