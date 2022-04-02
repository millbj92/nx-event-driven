import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FriendsCountAggregate } from './friends-count-aggregate.output';
import { FriendsMinAggregate } from './friends-min-aggregate.output';
import { FriendsMaxAggregate } from './friends-max-aggregate.output';

@ObjectType()
export class FriendsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    friendUserId!: string;

    @Field(() => Boolean, {nullable:false})
    status!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FriendsCountAggregate, {nullable:true})
    _count?: FriendsCountAggregate;

    @Field(() => FriendsMinAggregate, {nullable:true})
    _min?: FriendsMinAggregate;

    @Field(() => FriendsMaxAggregate, {nullable:true})
    _max?: FriendsMaxAggregate;
}
