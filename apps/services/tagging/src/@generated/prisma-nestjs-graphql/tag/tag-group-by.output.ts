import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TagCountAggregate } from './tag-count-aggregate.output';
import { TagMinAggregate } from './tag-min-aggregate.output';
import { TagMaxAggregate } from './tag-max-aggregate.output';

@ObjectType()
export class TagGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    postId?: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => TagCountAggregate, {nullable:true})
    _count?: TagCountAggregate;

    @Field(() => TagMinAggregate, {nullable:true})
    _min?: TagMinAggregate;

    @Field(() => TagMaxAggregate, {nullable:true})
    _max?: TagMaxAggregate;
}
