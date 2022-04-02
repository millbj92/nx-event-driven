import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Friends {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    friendUserId!: string;

    @Field(() => User, {nullable:false})
    Users?: User;

    @Field(() => User, {nullable:false})
    FriendUsers?: User;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    status!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
