import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MessageThreadMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
