import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageThreadCreateManyInput } from './message-thread-create-many.input';

@ArgsType()
export class CreateManyMessageThreadArgs {

    @Field(() => [MessageThreadCreateManyInput], {nullable:false})
    data!: Array<MessageThreadCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
