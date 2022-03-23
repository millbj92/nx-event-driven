import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageCreateManyInput } from './message-create-many.input';

@ArgsType()
export class CreateManyMessageArgs {

    @Field(() => [MessageCreateManyInput], {nullable:false})
    data!: Array<MessageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
