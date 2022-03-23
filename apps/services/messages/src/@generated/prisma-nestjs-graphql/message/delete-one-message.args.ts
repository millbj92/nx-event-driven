import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@ArgsType()
export class DeleteOneMessageArgs {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;
}
