import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';
import { ThreadCreateInput } from './thread-create.input';
import { ThreadUpdateInput } from './thread-update.input';

@ArgsType()
export class UpsertOneThreadArgs {

    @Field(() => ThreadWhereUniqueInput, {nullable:false})
    where!: ThreadWhereUniqueInput;

    @Field(() => ThreadCreateInput, {nullable:false})
    create!: ThreadCreateInput;

    @Field(() => ThreadUpdateInput, {nullable:false})
    update!: ThreadUpdateInput;
}
