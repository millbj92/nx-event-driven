import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ThreadCreateWithoutMessagesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
