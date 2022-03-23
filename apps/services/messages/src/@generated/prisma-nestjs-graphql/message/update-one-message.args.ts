import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageUpdateInput } from './message-update.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@ArgsType()
export class UpdateOneMessageArgs {

    @Field(() => MessageUpdateInput, {nullable:false})
    data!: MessageUpdateInput;

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;
}
