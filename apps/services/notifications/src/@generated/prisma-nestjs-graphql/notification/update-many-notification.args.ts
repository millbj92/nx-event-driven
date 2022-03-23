import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationUpdateManyMutationInput } from './notification-update-many-mutation.input';
import { NotificationWhereInput } from './notification-where.input';

@ArgsType()
export class UpdateManyNotificationArgs {

    @Field(() => NotificationUpdateManyMutationInput, {nullable:false})
    data!: NotificationUpdateManyMutationInput;

    @Field(() => NotificationWhereInput, {nullable:true})
    where?: NotificationWhereInput;
}
