import { IQuery } from "@nestjs/cqrs";
import { GraphQLResolveInfo } from "graphql";
import { NotificationWhereUniqueInput } from "../../../@generated/prisma-nestjs-graphql/notification/notification-where-unique.input";
import { NotificationWhereInput } from "../../../@generated/prisma-nestjs-graphql/notification/notification-where.input";
import { NotificationAggregateArgs } from './../../../@generated/prisma-nestjs-graphql/notification/notification-aggregate.args';

export class AllNotificationsQuery implements IQuery {
  constructor (
    public readonly where: NotificationWhereInput,
    public readonly info: GraphQLResolveInfo,
  ) {
  }
}

export class OneNotificationQuery implements IQuery {
  constructor (
    public readonly where: NotificationWhereUniqueInput,
  ) {
  }
}


export class NotificationAggregateQuery implements IQuery {
  constructor (
    public readonly args: NotificationAggregateArgs,
  ) {
  }
}
