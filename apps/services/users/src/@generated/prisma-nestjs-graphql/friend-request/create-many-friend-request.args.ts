import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendRequestCreateManyInput } from './friend-request-create-many.input';

@ArgsType()
export class CreateManyFriendRequestArgs {

    @Field(() => [FriendRequestCreateManyInput], {nullable:false})
    data!: Array<FriendRequestCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
