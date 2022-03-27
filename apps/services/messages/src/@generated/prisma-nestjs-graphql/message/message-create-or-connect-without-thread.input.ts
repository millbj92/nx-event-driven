import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageCreateWithoutThreadInput } from './message-create-without-thread.input';

@InputType()
export class MessageCreateOrConnectWithoutThreadInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutThreadInput, {nullable:false})
    create!: MessageCreateWithoutThreadInput;
}
