import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClaimsUpdateInput } from './claims-update.input';
import { ClaimsWhereUniqueInput } from './claims-where-unique.input';

@ArgsType()
export class UpdateOneClaimsArgs {

    @Field(() => ClaimsUpdateInput, {nullable:false})
    data!: ClaimsUpdateInput;

    @Field(() => ClaimsWhereUniqueInput, {nullable:false})
    where!: ClaimsWhereUniqueInput;
}
