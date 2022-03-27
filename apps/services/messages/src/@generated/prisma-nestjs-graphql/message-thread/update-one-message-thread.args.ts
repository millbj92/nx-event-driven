import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageThreadUpdateInput } from './message-thread-update.input';
import { MessageThreadWhereUniqueInput } from './message-thread-where-unique.input';

@ArgsType()
export class UpdateOneMessageThreadArgs {

    @Field(() => MessageThreadUpdateInput, {nullable:false})
    data!: MessageThreadUpdateInput;

    @Field(() => MessageThreadWhereUniqueInput, {nullable:false})
    where!: MessageThreadWhereUniqueInput;
}
