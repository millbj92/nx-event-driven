import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TenantCreateManyInput } from './tenant-create-many.input';

@ArgsType()
export class CreateManyTenantArgs {

    @Field(() => [TenantCreateManyInput], {nullable:false})
    data!: Array<TenantCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
