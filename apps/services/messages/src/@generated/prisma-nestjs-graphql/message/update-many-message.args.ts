import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageUpdateManyMutationInput } from './message-update-many-mutation.input';
import { MessageWhereInput } from './message-where.input';

@ArgsType()
export class UpdateManyMessageArgs {

    @Field(() => MessageUpdateManyMutationInput, {nullable:false})
    data!: MessageUpdateManyMutationInput;

    @Field(() => MessageWhereInput, {nullable:true})
    where?: MessageWhereInput;
}
