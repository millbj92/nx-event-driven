import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateuserIdsInput } from '../prisma/message-createuser-ids.input';

@InputType()
export class MessageCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Boolean, {nullable:false})
    read!: boolean;

    @Field(() => MessageCreateuserIdsInput, {nullable:true})
    userIds?: MessageCreateuserIdsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
