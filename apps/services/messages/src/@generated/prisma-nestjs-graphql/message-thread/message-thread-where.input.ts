import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { MessageListRelationFilter } from '../message/message-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MessageThreadWhereInput {

    @Field(() => [MessageThreadWhereInput], {nullable:true})
    AND?: Array<MessageThreadWhereInput>;

    @Field(() => [MessageThreadWhereInput], {nullable:true})
    OR?: Array<MessageThreadWhereInput>;

    @Field(() => [MessageThreadWhereInput], {nullable:true})
    NOT?: Array<MessageThreadWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    participants?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    messageIds?: StringNullableListFilter;

    @Field(() => MessageListRelationFilter, {nullable:true})
    messages?: MessageListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
