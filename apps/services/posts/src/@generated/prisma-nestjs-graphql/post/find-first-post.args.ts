import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostWhereInput } from './post-where.input';
import { PostOrderByWithRelationAndSearchRelevanceInput } from './post-order-by-with-relation-and-search-relevance.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PostScalarFieldEnum } from './post-scalar-field.enum';

@ArgsType()
export class FindFirstPostArgs {

    @Field(() => PostWhereInput, {nullable:true})
    where?: PostWhereInput;

    @Field(() => [PostOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<PostOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    cursor?: PostWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PostScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PostScalarFieldEnum>;
}
