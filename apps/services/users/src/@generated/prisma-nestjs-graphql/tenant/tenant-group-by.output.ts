import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TenantCountAggregate } from './tenant-count-aggregate.output';
import { TenantMinAggregate } from './tenant-min-aggregate.output';
import { TenantMaxAggregate } from './tenant-max-aggregate.output';

@ObjectType()
export class TenantGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    clientSecret!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => TenantCountAggregate, {nullable:true})
    _count?: TenantCountAggregate;

    @Field(() => TenantMinAggregate, {nullable:true})
    _min?: TenantMinAggregate;

    @Field(() => TenantMaxAggregate, {nullable:true})
    _max?: TenantMaxAggregate;
}
