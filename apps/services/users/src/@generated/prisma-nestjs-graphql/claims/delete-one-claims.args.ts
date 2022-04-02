import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClaimsWhereUniqueInput } from './claims-where-unique.input';

@ArgsType()
export class DeleteOneClaimsArgs {

    @Field(() => ClaimsWhereUniqueInput, {nullable:false})
    where!: ClaimsWhereUniqueInput;
}
