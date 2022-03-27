import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadCreateInput } from './thread-create.input';

@ArgsType()
export class CreateOneThreadArgs {

    @Field(() => ThreadCreateInput, {nullable:false})
    data!: ThreadCreateInput;
}
