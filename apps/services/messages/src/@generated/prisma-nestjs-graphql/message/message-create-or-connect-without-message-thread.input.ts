import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageCreateWithoutMessageThreadInput } from './message-create-without-message-thread.input';

@InputType()
export class MessageCreateOrConnectWithoutMessageThreadInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutMessageThreadInput, {nullable:false})
    create!: MessageCreateWithoutMessageThreadInput;
}
