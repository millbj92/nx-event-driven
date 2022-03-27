import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutMessageThreadInput } from './message-update-without-message-thread.input';
import { MessageCreateWithoutMessageThreadInput } from './message-create-without-message-thread.input';

@InputType()
export class MessageUpsertWithWhereUniqueWithoutMessageThreadInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutMessageThreadInput, {nullable:false})
    update!: MessageUpdateWithoutMessageThreadInput;

    @Field(() => MessageCreateWithoutMessageThreadInput, {nullable:false})
    create!: MessageCreateWithoutMessageThreadInput;
}
