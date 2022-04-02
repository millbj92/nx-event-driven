import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ClaimsCountAggregate } from './claims-count-aggregate.output';
import { ClaimsMinAggregate } from './claims-min-aggregate.output';
import { ClaimsMaxAggregate } from './claims-max-aggregate.output';

@ObjectType()
export class AggregateClaims {

    @Field(() => ClaimsCountAggregate, {nullable:true})
    _count?: ClaimsCountAggregate;

    @Field(() => ClaimsMinAggregate, {nullable:true})
    _min?: ClaimsMinAggregate;

    @Field(() => ClaimsMaxAggregate, {nullable:true})
    _max?: ClaimsMaxAggregate;
}
