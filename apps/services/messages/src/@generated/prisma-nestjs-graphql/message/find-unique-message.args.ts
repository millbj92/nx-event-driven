import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@ArgsType()
export class FindUniqueMessageArgs {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;
}
