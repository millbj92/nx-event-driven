import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationCreateManyInput } from './notification-create-many.input';

@ArgsType()
export class CreateManyNotificationArgs {

    @Field(() => [NotificationCreateManyInput], {nullable:false})
    data!: Array<NotificationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
