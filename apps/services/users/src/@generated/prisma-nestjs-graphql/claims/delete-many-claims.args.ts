import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClaimsWhereInput } from './claims-where.input';

@ArgsType()
export class DeleteManyClaimsArgs {

    @Field(() => ClaimsWhereInput, {nullable:true})
    where?: ClaimsWhereInput;
}
