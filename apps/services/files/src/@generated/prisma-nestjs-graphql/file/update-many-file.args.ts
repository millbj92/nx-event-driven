import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileUpdateManyMutationInput } from './file-update-many-mutation.input';
import { FileWhereInput } from './file-where.input';

@ArgsType()
export class UpdateManyFileArgs {

    @Field(() => FileUpdateManyMutationInput, {nullable:false})
    data!: FileUpdateManyMutationInput;

    @Field(() => FileWhereInput, {nullable:true})
    where?: FileWhereInput;
}
