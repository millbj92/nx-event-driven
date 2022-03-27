import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadWhereInput } from './thread-where.input';
import { ThreadOrderByWithRelationAndSearchRelevanceInput } from './thread-order-by-with-relation-and-search-relevance.input';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ThreadScalarFieldEnum } from './thread-scalar-field.enum';

@ArgsType()
export class FindFirstThreadArgs {

    @Field(() => ThreadWhereInput, {nullable:true})
    where?: ThreadWhereInput;

    @Field(() => [ThreadOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<ThreadOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => ThreadWhereUniqueInput, {nullable:true})
    cursor?: ThreadWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ThreadScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ThreadScalarFieldEnum>;
}
