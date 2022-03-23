import { IQuery } from "@nestjs/cqrs";
import { GraphQLResolveInfo } from "graphql";
import { UserWhereUniqueInput } from "../../../@generated/prisma-nestjs-graphql/user/user-where-unique.input";
import { UserWhereInput } from "../../../@generated/prisma-nestjs-graphql/user/user-where.input";
import { UserAggregateArgs } from './../../../@generated/prisma-nestjs-graphql/user/user-aggregate.args';

export class AllUsersQuery implements IQuery {
  constructor (
    public readonly where: UserWhereInput,
    public readonly info: GraphQLResolveInfo,
  ) {
  }
}

export class OneUserQuery implements IQuery {
  constructor (
    public readonly where: UserWhereUniqueInput,
  ) {
  }
}


export class UserAggregateQuery implements IQuery {
  constructor (
    public readonly args: UserAggregateArgs,
  ) {
  }
}
