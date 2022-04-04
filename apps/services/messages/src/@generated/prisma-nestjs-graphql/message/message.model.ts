import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Thread } from '../thread/thread.model';

@ObjectType()
export class Message {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    threadId!: string;

    @Field(() => Thread, {nullable:false})
    thread?: Thread;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:false})
    fromId!: string;

    @Field(() => [String], {nullable:true})
    participants!: Array<string>;

    @Field(() => [String], {nullable:true})
    participantReadIds!: Array<string>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
