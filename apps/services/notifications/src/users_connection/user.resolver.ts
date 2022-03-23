import { Info, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';
import { NotificationWhereInput } from '../@generated/prisma-nestjs-graphql/notification/notification-where.input';
import { Notification } from '../notification.model';
import { NotificationService } from '../notification.service';
import { User } from './user.model';


@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @ResolveField((of) => [Notification])
  public async notifications(
    @Parent() user: User,
    @Info() info: GraphQLResolveInfo,
    ): Promise<Notification[]> {
    const where: NotificationWhereInput = {
      userId: {
        equals: user.id
      }
    };
    return await this.notificationService.notifications(where, info);
  }
}
