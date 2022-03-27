import { Resolver, Query, Mutation, Args, Int, Info, Parent, ResolveField } from '@nestjs/graphql';
import { NotificationService } from './notification.service';
import { Notification } from './notification.model';
import { NotificationCreateInput } from './@generated/prisma-nestjs-graphql/notification/notification-create.input';
import { NotificationWhereInput } from './@generated/prisma-nestjs-graphql/notification/notification-where.input';
import { GraphQLResolveInfo } from 'graphql';
import { NotificationWhereUniqueInput } from './@generated/prisma-nestjs-graphql/notification/notification-where-unique.input';
import { NotificationUpdateInput } from './@generated/prisma-nestjs-graphql/notification/notification-update.input';

import { NotificationAggregateArgs } from './@generated/prisma-nestjs-graphql/notification/notification-aggregate.args';
import { User } from './users_connection/user.model';

@Resolver(() => Notification)
export class NotificationResolver {
  constructor(
    private readonly notificationService: NotificationService
    ) {}

  @Mutation(() => Notification)
  async createNotification(
    @Args('createNotificationInput') createNotificationInput: NotificationCreateInput
  ) {
    return await this.notificationService.create(createNotificationInput);
  }

  @Query(() => [Notification], { name: 'notifications' })
  async notifications(
    @Args('where') where: NotificationWhereInput,
    @Info() info: GraphQLResolveInfo) {
    return await this.notificationService.notifications(where, info);
  }

  @Query(() => Notification, { name: 'notification', nullable: true })
  notification(@Args('notificationWhereUniqueInput') notificationWhereUniqueInput: NotificationWhereUniqueInput) {
    return this.notificationService.notification(notificationWhereUniqueInput);
  }

  @Query(() => Notification, {name: 'notificationAggregate', nullable: true})
  notificationAggregate(@Args() args: NotificationAggregateArgs) {
    return this.notificationService.notificationAggregate(args);
  }

  @Mutation(() => Notification, { name: 'updateNotification', nullable: true })
  updateNotification(
    @Args('notificationUpdateInput') notificationUpdateInput: NotificationUpdateInput
  ) {
    return this.notificationService.update(notificationUpdateInput);
  }

  @Mutation(() => Notification, { name: 'removeNotification', nullable: true })
  removeNotification(where: NotificationWhereUniqueInput) {
    return this.notificationService.remove(where);
  }

  @ResolveField((of) => User)
  user(@Parent() notification: Notification): any {
    return { __typename: 'User', id: notification.userId};
  }
}
