import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationWhereInput } from './notification-where.input';

@ArgsType()
export class DeleteManyNotificationArgs {

    @Field(() => NotificationWhereInput, {nullable:true})
    where?: NotificationWhereInput;
}
