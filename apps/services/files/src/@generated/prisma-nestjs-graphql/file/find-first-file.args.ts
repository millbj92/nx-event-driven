import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileWhereInput } from './file-where.input';
import { FileOrderByWithRelationAndSearchRelevanceInput } from './file-order-by-with-relation-and-search-relevance.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FileScalarFieldEnum } from './file-scalar-field.enum';

@ArgsType()
export class FindFirstFileArgs {

    @Field(() => FileWhereInput, {nullable:true})
    where?: FileWhereInput;

    @Field(() => [FileOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<FileOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    cursor?: FileWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FileScalarFieldEnum>;
}
