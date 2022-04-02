import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestCreateManySenderInput } from './friend-request-create-many-sender.input';

@InputType()
export class FriendRequestCreateManySenderInputEnvelope {

    @Field(() => [FriendRequestCreateManySenderInput], {nullable:false})
    data!: Array<FriendRequestCreateManySenderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
