import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FriendRequest } from '../friend-request/friend-request.model';
import { Friends } from '../friends/friends.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    verified!: boolean;

    @Field(() => String, {nullable:false})
    verification!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isActive!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isBanned!: boolean;

    @Field(() => String, {nullable:true})
    middle_name!: string | null;

    @Field(() => String, {nullable:true})
    nickname!: string | null;

    @Field(() => String, {nullable:true})
    preferred_username!: string | null;

    @Field(() => String, {nullable:true})
    profile!: string | null;

    @Field(() => String, {nullable:false,defaultValue:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'})
    picture!: string;

    @Field(() => String, {nullable:true})
    website!: string | null;

    @Field(() => String, {nullable:true})
    gender!: string | null;

    @Field(() => Date, {nullable:true})
    birthdate!: Date | null;

    @Field(() => String, {nullable:true})
    zoneInfo!: string | null;

    @Field(() => String, {nullable:true})
    locale!: string | null;

    @Field(() => String, {nullable:true})
    phone_number!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    phone_number_verified!: boolean;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    banDuration!: number;

    @Field(() => [String], {nullable:true})
    friendRequestIds!: Array<string>;

    @Field(() => [FriendRequest], {nullable:true})
    friendRequests?: Array<FriendRequest>;

    @Field(() => [FriendRequest], {nullable:true})
    friendRequestsSent?: Array<FriendRequest>;

    @Field(() => [Friends], {nullable:true})
    userFriends?: Array<Friends>;

    @Field(() => [Friends], {nullable:true})
    friendUserFriends?: Array<Friends>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
