import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageScalarWhereInput } from './message-scalar-where.input';
import { MessageUpdateManyMutationInput } from './message-update-many-mutation.input';

@InputType()
export class MessageUpdateManyWithWhereWithoutMessageThreadInput {

    @Field(() => MessageScalarWhereInput, {nullable:false})
    where!: MessageScalarWhereInput;

    @Field(() => MessageUpdateManyMutationInput, {nullable:false})
    data!: MessageUpdateManyMutationInput;
}
