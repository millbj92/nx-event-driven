import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutThreadInput } from './message-update-without-thread.input';
import { MessageCreateWithoutThreadInput } from './message-create-without-thread.input';

@InputType()
export class MessageUpsertWithWhereUniqueWithoutThreadInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutThreadInput, {nullable:false})
    update!: MessageUpdateWithoutThreadInput;

    @Field(() => MessageCreateWithoutThreadInput, {nullable:false})
    create!: MessageCreateWithoutThreadInput;
}
