import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class FriendRequest {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    receiverId!: string;

    @Field(() => User, {nullable:false})
    receiver?: User;

    @Field(() => String, {nullable:false})
    senderId!: string;

    @Field(() => User, {nullable:false})
    sender?: User;

    @Field(() => String, {nullable:false,defaultValue:'pending'})
    status!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
