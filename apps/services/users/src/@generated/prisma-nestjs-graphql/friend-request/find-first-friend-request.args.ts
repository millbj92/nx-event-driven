import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendRequestWhereInput } from './friend-request-where.input';
import { FriendRequestOrderByWithRelationAndSearchRelevanceInput } from './friend-request-order-by-with-relation-and-search-relevance.input';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FriendRequestScalarFieldEnum } from './friend-request-scalar-field.enum';

@ArgsType()
export class FindFirstFriendRequestArgs {

    @Field(() => FriendRequestWhereInput, {nullable:true})
    where?: FriendRequestWhereInput;

    @Field(() => [FriendRequestOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<FriendRequestOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => FriendRequestWhereUniqueInput, {nullable:true})
    cursor?: FriendRequestWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FriendRequestScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FriendRequestScalarFieldEnum>;
}
