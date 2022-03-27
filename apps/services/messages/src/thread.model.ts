import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Message } from './message.model';
import { ThreadCount } from './@generated/prisma-nestjs-graphql/thread/thread-count.output';

@ObjectType()
export class Thread {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => [Message], {nullable:true})
    messages?: Array<Message>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => ThreadCount, {nullable:false})
    _count?: ThreadCount;
}
