import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendRequestScalarWhereInput } from './friend-request-scalar-where.input';
import { FriendRequestUpdateManyMutationInput } from './friend-request-update-many-mutation.input';

@InputType()
export class FriendRequestUpdateManyWithWhereWithoutSenderInput {

    @Field(() => FriendRequestScalarWhereInput, {nullable:false})
    where!: FriendRequestScalarWhereInput;

    @Field(() => FriendRequestUpdateManyMutationInput, {nullable:false})
    data!: FriendRequestUpdateManyMutationInput;
}
