import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PostCountAggregate } from './post-count-aggregate.output';
import { PostMinAggregate } from './post-min-aggregate.output';
import { PostMaxAggregate } from './post-max-aggregate.output';

@ObjectType()
export class PostGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Boolean, {nullable:false})
    published!: boolean;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => [String], {nullable:true})
    fileIds?: Array<string>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PostCountAggregate, {nullable:true})
    _count?: PostCountAggregate;

    @Field(() => PostMinAggregate, {nullable:true})
    _min?: PostMinAggregate;

    @Field(() => PostMaxAggregate, {nullable:true})
    _max?: PostMaxAggregate;
}
