import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadCreateWithoutMessagesInput } from './thread-create-without-messages.input';
import { ThreadCreateOrConnectWithoutMessagesInput } from './thread-create-or-connect-without-messages.input';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';

@InputType()
export class ThreadCreateNestedOneWithoutMessagesInput {

    @Field(() => ThreadCreateWithoutMessagesInput, {nullable:true})
    create?: ThreadCreateWithoutMessagesInput;

    @Field(() => ThreadCreateOrConnectWithoutMessagesInput, {nullable:true})
    connectOrCreate?: ThreadCreateOrConnectWithoutMessagesInput;

    @Field(() => ThreadWhereUniqueInput, {nullable:true})
    connect?: ThreadWhereUniqueInput;
}
