import { IQuery } from "@nestjs/cqrs";
import { GraphQLResolveInfo } from "graphql";
import { PostWhereUniqueInput } from "../../../@generated/prisma-nestjs-graphql/post/post-where-unique.input";
import { PostWhereInput } from "../../../@generated/prisma-nestjs-graphql/post/post-where.input";
import { PostAggregateArgs } from './../../../@generated/prisma-nestjs-graphql/post/post-aggregate.args';

export class AllPostsQuery implements IQuery {
  constructor (
    public readonly where: PostWhereInput,
    public readonly info: GraphQLResolveInfo,
  ) {
  }
}

export class OnePostQuery implements IQuery {
  constructor (
    public readonly where: PostWhereUniqueInput,
  ) {
  }
}


export class PostAggregateQuery implements IQuery {
  constructor (
    public readonly args: PostAggregateArgs,
  ) {
  }
}
