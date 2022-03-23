import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';

@ArgsType()
export class FindUniqueNotificationArgs {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    where!: NotificationWhereUniqueInput;
}
