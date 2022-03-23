import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageCreateInput } from './message-create.input';
import { MessageUpdateInput } from './message-update.input';

@ArgsType()
export class UpsertOneMessageArgs {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateInput, {nullable:false})
    create!: MessageCreateInput;

    @Field(() => MessageUpdateInput, {nullable:false})
    update!: MessageUpdateInput;
}
