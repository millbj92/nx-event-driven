import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MessageMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    text?: string;

    @Field(() => Boolean, {nullable:true})
    read?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
