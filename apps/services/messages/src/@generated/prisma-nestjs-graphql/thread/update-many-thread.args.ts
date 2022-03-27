import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadUpdateManyMutationInput } from './thread-update-many-mutation.input';
import { ThreadWhereInput } from './thread-where.input';

@ArgsType()
export class UpdateManyThreadArgs {

    @Field(() => ThreadUpdateManyMutationInput, {nullable:false})
    data!: ThreadUpdateManyMutationInput;

    @Field(() => ThreadWhereInput, {nullable:true})
    where?: ThreadWhereInput;
}
