import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClaimsCreateManyInput } from './claims-create-many.input';

@ArgsType()
export class CreateManyClaimsArgs {

    @Field(() => [ClaimsCreateManyInput], {nullable:false})
    data!: Array<ClaimsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
