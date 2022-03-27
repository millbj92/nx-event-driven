import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class MessageThreadScalarWhereWithAggregatesInput {

    @Field(() => [MessageThreadScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MessageThreadScalarWhereWithAggregatesInput>;

    @Field(() => [MessageThreadScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MessageThreadScalarWhereWithAggregatesInput>;

    @Field(() => [MessageThreadScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MessageThreadScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    participants?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    messageIds?: StringNullableListFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
