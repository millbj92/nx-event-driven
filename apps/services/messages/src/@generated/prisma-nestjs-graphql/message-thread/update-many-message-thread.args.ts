import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageThreadUpdateManyMutationInput } from './message-thread-update-many-mutation.input';
import { MessageThreadWhereInput } from './message-thread-where.input';

@ArgsType()
export class UpdateManyMessageThreadArgs {

    @Field(() => MessageThreadUpdateManyMutationInput, {nullable:false})
    data!: MessageThreadUpdateManyMutationInput;

    @Field(() => MessageThreadWhereInput, {nullable:true})
    where?: MessageThreadWhereInput;
}
