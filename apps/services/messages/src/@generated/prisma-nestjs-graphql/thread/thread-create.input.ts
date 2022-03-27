import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateNestedManyWithoutThreadInput } from '../message/message-create-nested-many-without-thread.input';

@InputType()
export class ThreadCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MessageCreateNestedManyWithoutThreadInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutThreadInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
