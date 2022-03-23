import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Message {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Boolean, {nullable:false})
    read!: boolean;

    @Field(() => [String], {nullable:true})
    userIds!: Array<string>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
