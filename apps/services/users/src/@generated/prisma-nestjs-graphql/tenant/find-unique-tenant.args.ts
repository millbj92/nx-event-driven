import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';

@ArgsType()
export class FindUniqueTenantArgs {

    @Field(() => TenantWhereUniqueInput, {nullable:false})
    where!: TenantWhereUniqueInput;
}
