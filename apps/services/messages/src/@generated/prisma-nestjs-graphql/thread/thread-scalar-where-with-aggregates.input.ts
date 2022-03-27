import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ThreadScalarWhereWithAggregatesInput {

    @Field(() => [ThreadScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ThreadScalarWhereWithAggregatesInput>;

    @Field(() => [ThreadScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ThreadScalarWhereWithAggregatesInput>;

    @Field(() => [ThreadScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ThreadScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
