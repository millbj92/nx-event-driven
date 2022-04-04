import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    friendRequests?: number;

    @Field(() => Int, {nullable:false})
    friendRequestsSent?: number;

    @Field(() => Int, {nullable:false})
    userFriends?: number;

    @Field(() => Int, {nullable:false})
    friendUserFriends?: number;
}