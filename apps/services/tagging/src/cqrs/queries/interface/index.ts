import { IQuery } from "@nestjs/cqrs";
import { GraphQLResolveInfo } from "graphql";
import { TagWhereUniqueInput } from "../../../@generated/prisma-nestjs-graphql/tag/tag-where-unique.input";
import { TagWhereInput } from "../../../@generated/prisma-nestjs-graphql/tag/tag-where.input";
import { TagAggregateArgs } from './../../../@generated/prisma-nestjs-graphql/tag/tag-aggregate.args';

export class AllTagsQuery implements IQuery {
  constructor (
    public readonly where: TagWhereInput,
    public readonly info: GraphQLResolveInfo,
  ) {
  }
}

export class OneTagQuery implements IQuery {
  constructor (
    public readonly where: TagWhereUniqueInput,
  ) {
  }
}


export class TagAggregateQuery implements IQuery {
  constructor (
    public readonly args: TagAggregateArgs,
  ) {
  }
}
