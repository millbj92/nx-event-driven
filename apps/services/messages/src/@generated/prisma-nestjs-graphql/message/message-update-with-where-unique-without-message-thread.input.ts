import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutMessageThreadInput } from './message-update-without-message-thread.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutMessageThreadInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutMessageThreadInput, {nullable:false})
    data!: MessageUpdateWithoutMessageThreadInput;
}
