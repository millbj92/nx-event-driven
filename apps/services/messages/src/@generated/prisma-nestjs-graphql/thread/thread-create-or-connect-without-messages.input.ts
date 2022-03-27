import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';
import { ThreadCreateWithoutMessagesInput } from './thread-create-without-messages.input';

@InputType()
export class ThreadCreateOrConnectWithoutMessagesInput {

    @Field(() => ThreadWhereUniqueInput, {nullable:false})
    where!: ThreadWhereUniqueInput;

    @Field(() => ThreadCreateWithoutMessagesInput, {nullable:false})
    create!: ThreadCreateWithoutMessagesInput;
}
