import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TenantUpdateManyMutationInput } from './tenant-update-many-mutation.input';
import { TenantWhereInput } from './tenant-where.input';

@ArgsType()
export class UpdateManyTenantArgs {

    @Field(() => TenantUpdateManyMutationInput, {nullable:false})
    data!: TenantUpdateManyMutationInput;

    @Field(() => TenantWhereInput, {nullable:true})
    where?: TenantWhereInput;
}
