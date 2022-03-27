import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageThreadWhereInput } from './message-thread-where.input';

@InputType()
export class MessageThreadRelationFilter {

    @Field(() => MessageThreadWhereInput, {nullable:true})
    is?: MessageThreadWhereInput;

    @Field(() => MessageThreadWhereInput, {nullable:true})
    isNot?: MessageThreadWhereInput;
}
