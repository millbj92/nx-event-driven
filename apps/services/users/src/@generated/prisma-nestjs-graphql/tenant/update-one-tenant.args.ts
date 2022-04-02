import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TenantUpdateInput } from './tenant-update.input';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';

@ArgsType()
export class UpdateOneTenantArgs {

    @Field(() => TenantUpdateInput, {nullable:false})
    data!: TenantUpdateInput;

    @Field(() => TenantWhereUniqueInput, {nullable:false})
    where!: TenantWhereUniqueInput;
}
