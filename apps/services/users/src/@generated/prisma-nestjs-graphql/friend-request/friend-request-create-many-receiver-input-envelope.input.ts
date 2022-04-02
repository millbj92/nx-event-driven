import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestCreateManyReceiverInput } from './friend-request-create-many-receiver.input';

@InputType()
export class FriendRequestCreateManyReceiverInputEnvelope {

    @Field(() => [FriendRequestCreateManyReceiverInput], {nullable:false})
    data!: Array<FriendRequestCreateManyReceiverInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
