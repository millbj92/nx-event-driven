import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class NotificationScalarWhereWithAggregatesInput {

    @Field(() => [NotificationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NotificationScalarWhereWithAggregatesInput>;

    @Field(() => [NotificationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NotificationScalarWhereWithAggregatesInput>;

    @Field(() => [NotificationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NotificationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    body?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    read?: BoolWithAggregatesFilter;
}
