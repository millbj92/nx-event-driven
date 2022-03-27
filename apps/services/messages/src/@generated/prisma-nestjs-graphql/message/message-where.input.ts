import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ThreadRelationFilter } from '../thread/thread-relation-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MessageWhereInput {

    @Field(() => [MessageWhereInput], {nullable:true})
    AND?: Array<MessageWhereInput>;

    @Field(() => [MessageWhereInput], {nullable:true})
    OR?: Array<MessageWhereInput>;

    @Field(() => [MessageWhereInput], {nullable:true})
    NOT?: Array<MessageWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    threadId?: StringFilter;

    @Field(() => ThreadRelationFilter, {nullable:true})
    thread?: ThreadRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fromId?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    participants?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    participantReadIds?: StringNullableListFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
