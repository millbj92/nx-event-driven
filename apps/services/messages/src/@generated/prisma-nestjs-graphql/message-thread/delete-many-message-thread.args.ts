import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageThreadWhereInput } from './message-thread-where.input';

@ArgsType()
export class DeleteManyMessageThreadArgs {

    @Field(() => MessageThreadWhereInput, {nullable:true})
    where?: MessageThreadWhereInput;
}
