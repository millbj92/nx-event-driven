import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereInput } from './message-where.input';

@InputType()
export class MessageListRelationFilter {

    @Field(() => MessageWhereInput, {nullable:true})
    every?: MessageWhereInput;

    @Field(() => MessageWhereInput, {nullable:true})
    some?: MessageWhereInput;

    @Field(() => MessageWhereInput, {nullable:true})
    none?: MessageWhereInput;
}
