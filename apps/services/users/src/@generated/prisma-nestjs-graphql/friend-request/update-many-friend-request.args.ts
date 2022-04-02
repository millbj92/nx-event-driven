import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendRequestUpdateManyMutationInput } from './friend-request-update-many-mutation.input';
import { FriendRequestWhereInput } from './friend-request-where.input';

@ArgsType()
export class UpdateManyFriendRequestArgs {

    @Field(() => FriendRequestUpdateManyMutationInput, {nullable:false})
    data!: FriendRequestUpdateManyMutationInput;

    @Field(() => FriendRequestWhereInput, {nullable:true})
    where?: FriendRequestWhereInput;
}
