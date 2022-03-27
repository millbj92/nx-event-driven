import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadCreateManyInput } from './thread-create-many.input';

@ArgsType()
export class CreateManyThreadArgs {

    @Field(() => [ThreadCreateManyInput], {nullable:false})
    data!: Array<ThreadCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
