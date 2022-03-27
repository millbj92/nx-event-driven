import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ThreadCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
