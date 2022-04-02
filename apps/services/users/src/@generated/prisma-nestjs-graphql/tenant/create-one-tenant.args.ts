import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TenantCreateInput } from './tenant-create.input';

@ArgsType()
export class CreateOneTenantArgs {

    @Field(() => TenantCreateInput, {nullable:false})
    data!: TenantCreateInput;
}
