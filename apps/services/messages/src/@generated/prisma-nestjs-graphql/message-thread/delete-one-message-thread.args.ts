import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageThreadWhereUniqueInput } from './message-thread-where-unique.input';

@ArgsType()
export class DeleteOneMessageThreadArgs {

    @Field(() => MessageThreadWhereUniqueInput, {nullable:false})
    where!: MessageThreadWhereUniqueInput;
}
