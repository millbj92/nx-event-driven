import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageThreadWhereInput } from './message-thread-where.input';
import { MessageThreadOrderByWithRelationAndSearchRelevanceInput } from './message-thread-order-by-with-relation-and-search-relevance.input';
import { MessageThreadWhereUniqueInput } from './message-thread-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MessageThreadScalarFieldEnum } from './message-thread-scalar-field.enum';

@ArgsType()
export class FindManyMessageThreadArgs {

    @Field(() => MessageThreadWhereInput, {nullable:true})
    where?: MessageThreadWhereInput;

    @Field(() => [MessageThreadOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<MessageThreadOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => MessageThreadWhereUniqueInput, {nullable:true})
    cursor?: MessageThreadWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MessageThreadScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MessageThreadScalarFieldEnum>;
}
