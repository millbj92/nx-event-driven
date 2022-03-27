import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageThreadWhereUniqueInput } from './message-thread-where-unique.input';
import { MessageThreadCreateInput } from './message-thread-create.input';
import { MessageThreadUpdateInput } from './message-thread-update.input';

@ArgsType()
export class UpsertOneMessageThreadArgs {

    @Field(() => MessageThreadWhereUniqueInput, {nullable:false})
    where!: MessageThreadWhereUniqueInput;

    @Field(() => MessageThreadCreateInput, {nullable:false})
    create!: MessageThreadCreateInput;

    @Field(() => MessageThreadUpdateInput, {nullable:false})
    update!: MessageThreadUpdateInput;
}
