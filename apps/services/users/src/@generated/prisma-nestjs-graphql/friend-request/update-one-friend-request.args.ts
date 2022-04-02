import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendRequestUpdateInput } from './friend-request-update.input';
import { FriendRequestWhereUniqueInput } from './friend-request-where-unique.input';

@ArgsType()
export class UpdateOneFriendRequestArgs {

    @Field(() => FriendRequestUpdateInput, {nullable:false})
    data!: FriendRequestUpdateInput;

    @Field(() => FriendRequestWhereUniqueInput, {nullable:false})
    where!: FriendRequestWhereUniqueInput;
}
