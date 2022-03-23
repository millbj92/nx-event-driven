import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageWhereInput } from './message-where.input';

@ArgsType()
export class DeleteManyMessageArgs {

    @Field(() => MessageWhereInput, {nullable:true})
    where?: MessageWhereInput;
}
