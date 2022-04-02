import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClaimsCreateInput } from './claims-create.input';

@ArgsType()
export class CreateOneClaimsArgs {

    @Field(() => ClaimsCreateInput, {nullable:false})
    data!: ClaimsCreateInput;
}
