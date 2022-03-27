import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MessageThreadCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    participants?: true;

    @Field(() => Boolean, {nullable:true})
    messageIds?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
