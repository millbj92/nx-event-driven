import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileWhereInput } from './file-where.input';
import { FileOrderByWithRelationAndSearchRelevanceInput } from './file-order-by-with-relation-and-search-relevance.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FileCountAggregateInput } from './file-count-aggregate.input';
import { FileAvgAggregateInput } from './file-avg-aggregate.input';
import { FileSumAggregateInput } from './file-sum-aggregate.input';
import { FileMinAggregateInput } from './file-min-aggregate.input';
import { FileMaxAggregateInput } from './file-max-aggregate.input';

@ArgsType()
export class FileAggregateArgs {

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

    @Field(() => FileCountAggregateInput, {nullable:true})
    _count?: FileCountAggregateInput;

    @Field(() => FileAvgAggregateInput, {nullable:true})
    _avg?: FileAvgAggregateInput;

    @Field(() => FileSumAggregateInput, {nullable:true})
    _sum?: FileSumAggregateInput;

    @Field(() => FileMinAggregateInput, {nullable:true})
    _min?: FileMinAggregateInput;

    @Field(() => FileMaxAggregateInput, {nullable:true})
    _max?: FileMaxAggregateInput;
}
