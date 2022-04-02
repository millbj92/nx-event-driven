import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestWhereInput } from './friend-request-where.input';

@InputType()
export class FriendRequestListRelationFilter {

    @Field(() => FriendRequestWhereInput, {nullable:true})
    every?: FriendRequestWhereInput;

    @Field(() => FriendRequestWhereInput, {nullable:true})
    some?: FriendRequestWhereInput;

    @Field(() => FriendRequestWhereInput, {nullable:true})
    none?: FriendRequestWhereInput;
}
