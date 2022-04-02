import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendRequestWhereInput } from './friend-request-where.input';

@ArgsType()
export class DeleteManyFriendRequestArgs {

    @Field(() => FriendRequestWhereInput, {nullable:true})
    where?: FriendRequestWhereInput;
}
