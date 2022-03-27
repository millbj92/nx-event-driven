import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { MessageListRelationFilter } from '../message/message-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ThreadWhereInput {

    @Field(() => [ThreadWhereInput], {nullable:true})
    AND?: Array<ThreadWhereInput>;

    @Field(() => [ThreadWhereInput], {nullable:true})
    OR?: Array<ThreadWhereInput>;

    @Field(() => [ThreadWhereInput], {nullable:true})
    NOT?: Array<ThreadWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => MessageListRelationFilter, {nullable:true})
    messages?: MessageListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
