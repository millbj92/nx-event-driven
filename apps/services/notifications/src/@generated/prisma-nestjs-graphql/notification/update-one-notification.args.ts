import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationUpdateInput } from './notification-update.input';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';

@ArgsType()
export class UpdateOneNotificationArgs {

    @Field(() => NotificationUpdateInput, {nullable:false})
    data!: NotificationUpdateInput;

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    where!: NotificationWhereUniqueInput;
}
