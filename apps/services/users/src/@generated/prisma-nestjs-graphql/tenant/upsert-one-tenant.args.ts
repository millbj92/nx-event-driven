import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { TenantCreateInput } from './tenant-create.input';
import { TenantUpdateInput } from './tenant-update.input';

@ArgsType()
export class UpsertOneTenantArgs {

    @Field(() => TenantWhereUniqueInput, {nullable:false})
    where!: TenantWhereUniqueInput;

    @Field(() => TenantCreateInput, {nullable:false})
    create!: TenantCreateInput;

    @Field(() => TenantUpdateInput, {nullable:false})
    update!: TenantUpdateInput;
}
