import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileCreateManyInput } from './file-create-many.input';

@ArgsType()
export class CreateManyFileArgs {

    @Field(() => [FileCreateManyInput], {nullable:false})
    data!: Array<FileCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
