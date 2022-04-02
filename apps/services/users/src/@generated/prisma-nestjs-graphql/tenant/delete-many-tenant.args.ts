import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TenantWhereInput } from './tenant-where.input';

@ArgsType()
export class DeleteManyTenantArgs {

    @Field(() => TenantWhereInput, {nullable:true})
    where?: TenantWhereInput;
}
