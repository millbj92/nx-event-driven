import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClaimsWhereUniqueInput } from './claims-where-unique.input';
import { ClaimsCreateInput } from './claims-create.input';
import { ClaimsUpdateInput } from './claims-update.input';

@ArgsType()
export class UpsertOneClaimsArgs {

    @Field(() => ClaimsWhereUniqueInput, {nullable:false})
    where!: ClaimsWhereUniqueInput;

    @Field(() => ClaimsCreateInput, {nullable:false})
    create!: ClaimsCreateInput;

    @Field(() => ClaimsUpdateInput, {nullable:false})
    update!: ClaimsUpdateInput;
}
