import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TenantCountAggregate } from './tenant-count-aggregate.output';
import { TenantMinAggregate } from './tenant-min-aggregate.output';
import { TenantMaxAggregate } from './tenant-max-aggregate.output';

@ObjectType()
export class AggregateTenant {

    @Field(() => TenantCountAggregate, {nullable:true})
    _count?: TenantCountAggregate;

    @Field(() => TenantMinAggregate, {nullable:true})
    _min?: TenantMinAggregate;

    @Field(() => TenantMaxAggregate, {nullable:true})
    _max?: TenantMaxAggregate;
}
