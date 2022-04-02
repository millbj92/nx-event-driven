import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendsWhereInput } from './friends-where.input';

@InputType()
export class FriendsListRelationFilter {

    @Field(() => FriendsWhereInput, {nullable:true})
    every?: FriendsWhereInput;

    @Field(() => FriendsWhereInput, {nullable:true})
    some?: FriendsWhereInput;

    @Field(() => FriendsWhereInput, {nullable:true})
    none?: FriendsWhereInput;
}
