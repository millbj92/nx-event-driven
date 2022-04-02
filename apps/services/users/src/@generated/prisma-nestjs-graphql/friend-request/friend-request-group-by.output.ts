import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FriendRequestCountAggregate } from './friend-request-count-aggregate.output';
import { FriendRequestMinAggregate } from './friend-request-min-aggregate.output';
import { FriendRequestMaxAggregate } from './friend-request-max-aggregate.output';

@ObjectType()
export class FriendRequestGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    receiverId!: string;

    @Field(() => String, {nullable:false})
    senderId!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => FriendRequestCountAggregate, {nullable:true})
    _count?: FriendRequestCountAggregate;

    @Field(() => FriendRequestMinAggregate, {nullable:true})
    _min?: FriendRequestMinAggregate;

    @Field(() => FriendRequestMaxAggregate, {nullable:true})
    _max?: FriendRequestMaxAggregate;
}
