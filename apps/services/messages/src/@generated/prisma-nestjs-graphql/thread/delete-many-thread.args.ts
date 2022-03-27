import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ThreadWhereInput } from './thread-where.input';

@ArgsType()
export class DeleteManyThreadArgs {

    @Field(() => ThreadWhereInput, {nullable:true})
    where?: ThreadWhereInput;
}
