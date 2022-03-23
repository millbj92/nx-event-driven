import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationCreateInput } from './notification-create.input';

@ArgsType()
export class CreateOneNotificationArgs {

    @Field(() => NotificationCreateInput, {nullable:false})
    data!: NotificationCreateInput;
}
