import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileUpdateInput } from './file-update.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@ArgsType()
export class UpdateOneFileArgs {

    @Field(() => FileUpdateInput, {nullable:false})
    data!: FileUpdateInput;

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;
}
