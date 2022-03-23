import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileWhereInput } from './file-where.input';
import { FileOrderByWithAggregationInput } from './file-order-by-with-aggregation.input';
import { FileScalarFieldEnum } from './file-scalar-field.enum';
import { FileScalarWhereWithAggregatesInput } from './file-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FileCountAggregateInput } from './file-count-aggregate.input';
import { FileAvgAggregateInput } from './file-avg-aggregate.input';
import { FileSumAggregateInput } from './file-sum-aggregate.input';
import { FileMinAggregateInput } from './file-min-aggregate.input';
import { FileMaxAggregateInput } from './file-max-aggregate.input';

@ArgsType()
export class FileGroupByArgs {

    @Field(() => FileWhereInput, {nullable:true})
    where?: FileWhereInput;

    @Field(() => [FileOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FileOrderByWithAggregationInput>;

    @Field(() => [FileScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FileScalarFieldEnum>;

    @Field(() => FileScalarWhereWithAggregatesInput, {nullable:true})
    having?: FileScalarWhereWithAggregatesInput;

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
