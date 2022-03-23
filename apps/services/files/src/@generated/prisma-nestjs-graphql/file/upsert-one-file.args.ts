import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileCreateInput } from './file-create.input';
import { FileUpdateInput } from './file-update.input';

@ArgsType()
export class UpsertOneFileArgs {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateInput, {nullable:false})
    create!: FileCreateInput;

    @Field(() => FileUpdateInput, {nullable:false})
    update!: FileUpdateInput;
}
