import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendsWhereInput } from './friends-where.input';
import { FriendsOrderByWithRelationAndSearchRelevanceInput } from './friends-order-by-with-relation-and-search-relevance.input';
import { FriendsWhereUniqueInput } from './friends-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FriendsScalarFieldEnum } from './friends-scalar-field.enum';

@ArgsType()
export class FindFirstFriendsArgs {

    @Field(() => FriendsWhereInput, {nullable:true})
    where?: FriendsWhereInput;

    @Field(() => [FriendsOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<FriendsOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => FriendsWhereUniqueInput, {nullable:true})
    cursor?: FriendsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FriendsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FriendsScalarFieldEnum>;
}
