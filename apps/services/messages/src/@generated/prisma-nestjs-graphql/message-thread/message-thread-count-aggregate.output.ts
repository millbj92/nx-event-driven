import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MessageThreadCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    participants!: number;

    @Field(() => Int, {nullable:false})
    messageIds!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
