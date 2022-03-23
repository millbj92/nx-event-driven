import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileCreateInput } from './file-create.input';

@ArgsType()
export class CreateOneFileArgs {

    @Field(() => FileCreateInput, {nullable:false})
    data!: FileCreateInput;
}
