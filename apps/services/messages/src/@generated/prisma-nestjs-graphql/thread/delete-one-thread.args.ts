import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadWhereUniqueInput } from './thread-where-unique.input';

@ArgsType()
export class DeleteOneThreadArgs {

    @Field(() => ThreadWhereUniqueInput, {nullable:false})
    where!: ThreadWhereUniqueInput;
}
