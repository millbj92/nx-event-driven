import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';

@ArgsType()
export class FindUniqueFileArgs {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;
}
