import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutFriendRequestsInput } from '../user/user-update-one-required-without-friend-requests.input';
import { UserUpdateOneRequiredWithoutFriendRequestsSentInput } from '../user/user-update-one-required-without-friend-requests-sent.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class FriendRequestUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutFriendRequestsInput, {nullable:true})
    receiver?: UserUpdateOneRequiredWithoutFriendRequestsInput;

    @Field(() => UserUpdateOneRequiredWithoutFriendRequestsSentInput, {nullable:true})
    sender?: UserUpdateOneRequiredWithoutFriendRequestsSentInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
