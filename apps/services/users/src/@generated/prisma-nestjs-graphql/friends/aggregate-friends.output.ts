import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FriendsCountAggregate } from './friends-count-aggregate.output';
import { FriendsMinAggregate } from './friends-min-aggregate.output';
import { FriendsMaxAggregate } from './friends-max-aggregate.output';

@ObjectType()
export class AggregateFriends {

    @Field(() => FriendsCountAggregate, {nullable:true})
    _count?: FriendsCountAggregate;

    @Field(() => FriendsMinAggregate, {nullable:true})
    _min?: FriendsMinAggregate;

    @Field(() => FriendsMaxAggregate, {nullable:true})
    _max?: FriendsMaxAggregate;
}
