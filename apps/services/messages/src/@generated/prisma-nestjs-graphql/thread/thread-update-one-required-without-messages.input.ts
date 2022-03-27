import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadCreateWithoutMessagesInput } from './thread-create-without-messages.input';
import { ThreadCreateOrConnectWithoutMessagesInput } from './thread-create-or-connect-without-messages.input';
import { ThreadUpsertWithoutMessagesInput } from './thread-upsert-without-messages.input';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';
import { ThreadUpdateWithoutMessagesInput } from './thread-update-without-messages.input';

@InputType()
export class ThreadUpdateOneRequiredWithoutMessagesInput {

    @Field(() => ThreadCreateWithoutMessagesInput, {nullable:true})
    create?: ThreadCreateWithoutMessagesInput;

    @Field(() => ThreadCreateOrConnectWithoutMessagesInput, {nullable:true})
    connectOrCreate?: ThreadCreateOrConnectWithoutMessagesInput;

    @Field(() => ThreadUpsertWithoutMessagesInput, {nullable:true})
    upsert?: ThreadUpsertWithoutMessagesInput;

    @Field(() => ThreadWhereUniqueInput, {nullable:true})
    connect?: ThreadWhereUniqueInput;

    @Field(() => ThreadUpdateWithoutMessagesInput, {nullable:true})
    update?: ThreadUpdateWithoutMessagesInput;
}
