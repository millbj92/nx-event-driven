import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendRequestCreateInput } from './friend-request-create.input';

@ArgsType()
export class CreateOneFriendRequestArgs {

    @Field(() => FriendRequestCreateInput, {nullable:false})
    data!: FriendRequestCreateInput;
}
