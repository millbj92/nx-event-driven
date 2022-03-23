import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { NotificationCreateInput } from './notification-create.input';
import { NotificationUpdateInput } from './notification-update.input';

@ArgsType()
export class UpsertOneNotificationArgs {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    where!: NotificationWhereUniqueInput;

    @Field(() => NotificationCreateInput, {nullable:false})
    create!: NotificationCreateInput;

    @Field(() => NotificationUpdateInput, {nullable:false})
    update!: NotificationUpdateInput;
}
