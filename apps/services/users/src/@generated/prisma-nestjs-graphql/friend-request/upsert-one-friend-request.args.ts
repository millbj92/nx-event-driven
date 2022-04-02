import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';
import { FriendRequestCreateInput } from './friend-request-create.input';
import { FriendRequestUpdateInput } from './friend-request-update.input';

@ArgsType()
export class UpsertOneFriendRequestArgs {

    @Field(() => FriendRequestWhereUniqueInput, {nullable:false})
    where!: FriendRequestWhereUniqueInput;

    @Field(() => FriendRequestCreateInput, {nullable:false})
    create!: FriendRequestCreateInput;

    @Field(() => FriendRequestUpdateInput, {nullable:false})
    update!: FriendRequestUpdateInput;
}
