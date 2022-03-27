import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MessageMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    threadId?: string;

    @Field(() => String, {nullable:true})
    text?: string;

    @Field(() => String, {nullable:true})
    fromId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
