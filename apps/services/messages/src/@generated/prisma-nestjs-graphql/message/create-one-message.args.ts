import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageCreateInput } from './message-create.input';

@ArgsType()
export class CreateOneMessageArgs {

    @Field(() => MessageCreateInput, {nullable:false})
    data!: MessageCreateInput;
}
