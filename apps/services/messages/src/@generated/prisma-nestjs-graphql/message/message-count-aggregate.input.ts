import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MessageCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    threadId?: true;

    @Field(() => Boolean, {nullable:true})
    text?: true;

    @Field(() => Boolean, {nullable:true})
    fromId?: true;

    @Field(() => Boolean, {nullable:true})
    participants?: true;

    @Field(() => Boolean, {nullable:true})
    participantReadIds?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
