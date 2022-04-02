import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FriendRequestCountAggregate } from './friend-request-count-aggregate.output';
import { FriendRequestMinAggregate } from './friend-request-min-aggregate.output';
import { FriendRequestMaxAggregate } from './friend-request-max-aggregate.output';

@ObjectType()
export class AggregateFriendRequest {

    @Field(() => FriendRequestCountAggregate, {nullable:true})
    _count?: FriendRequestCountAggregate;

    @Field(() => FriendRequestMinAggregate, {nullable:true})
    _min?: FriendRequestMinAggregate;

    @Field(() => FriendRequestMaxAggregate, {nullable:true})
    _max?: FriendRequestMaxAggregate;
}
