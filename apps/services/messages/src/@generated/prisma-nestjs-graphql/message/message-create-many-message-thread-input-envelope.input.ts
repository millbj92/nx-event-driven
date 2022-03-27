import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateManyMessageThreadInput } from './message-create-many-message-thread.input';

@InputType()
export class MessageCreateManyMessageThreadInputEnvelope {

    @Field(() => [MessageCreateManyMessageThreadInput], {nullable:false})
    data!: Array<MessageCreateManyMessageThreadInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
