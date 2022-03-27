import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadUpdateInput } from './thread-update.input';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';

@ArgsType()
export class UpdateOneThreadArgs {

    @Field(() => ThreadUpdateInput, {nullable:false})
    data!: ThreadUpdateInput;

    @Field(() => ThreadWhereUniqueInput, {nullable:false})
    where!: ThreadWhereUniqueInput;
}
