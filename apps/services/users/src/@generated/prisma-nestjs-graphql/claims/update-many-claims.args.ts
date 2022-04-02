import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClaimsUpdateManyMutationInput } from './claims-update-many-mutation.input';
import { ClaimsWhereInput } from './claims-where.input';

@ArgsType()
export class UpdateManyClaimsArgs {

    @Field(() => ClaimsUpdateManyMutationInput, {nullable:false})
    data!: ClaimsUpdateManyMutationInput;

    @Field(() => ClaimsWhereInput, {nullable:true})
    where?: ClaimsWhereInput;
}
