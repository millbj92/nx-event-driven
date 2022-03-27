import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateManyThreadInput } from './message-create-many-thread.input';

@InputType()
export class MessageCreateManyThreadInputEnvelope {

    @Field(() => [MessageCreateManyThreadInput], {nullable:false})
    data!: Array<MessageCreateManyThreadInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
