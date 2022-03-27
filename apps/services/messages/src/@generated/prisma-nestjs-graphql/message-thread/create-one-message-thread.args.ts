import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageThreadCreateInput } from './message-thread-create.input';

@ArgsType()
export class CreateOneMessageThreadArgs {

    @Field(() => MessageThreadCreateInput, {nullable:false})
    data!: MessageThreadCreateInput;
}
