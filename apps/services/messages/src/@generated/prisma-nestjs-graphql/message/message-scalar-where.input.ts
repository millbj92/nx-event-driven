import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class MessageScalarWhereInput {

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    AND?: Array<MessageScalarWhereInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    OR?: Array<MessageScalarWhereInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    NOT?: Array<MessageScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    threadId?: StringFilter;

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
