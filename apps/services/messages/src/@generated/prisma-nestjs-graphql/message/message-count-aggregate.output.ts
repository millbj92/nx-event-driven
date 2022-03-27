import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MessageCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    threadId!: number;

    @Field(() => Int, {nullable:false})
    text!: number;

    @Field(() => Int, {nullable:false})
    fromId!: number;

    @Field(() => Int, {nullable:false})
    participants!: number;

    @Field(() => Int, {nullable:false})
    participantReadIds!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
