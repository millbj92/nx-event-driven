import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageUncheckedCreateNestedManyWithoutThreadInput } from '../message/message-unchecked-create-nested-many-without-thread.input';

@InputType()
export class ThreadUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => MessageUncheckedCreateNestedManyWithoutThreadInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutThreadInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
