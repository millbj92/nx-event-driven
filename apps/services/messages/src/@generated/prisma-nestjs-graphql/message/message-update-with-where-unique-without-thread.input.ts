import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutThreadInput } from './message-update-without-thread.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutThreadInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutThreadInput, {nullable:false})
    data!: MessageUpdateWithoutThreadInput;
}
