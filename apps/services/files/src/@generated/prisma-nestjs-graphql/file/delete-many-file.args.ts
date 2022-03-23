import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileWhereInput } from './file-where.input';

@ArgsType()
export class DeleteManyFileArgs {

    @Field(() => FileWhereInput, {nullable:true})
    where?: FileWhereInput;
}
