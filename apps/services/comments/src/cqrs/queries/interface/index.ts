import { IQuery } from "@nestjs/cqrs";
import { GraphQLResolveInfo } from "graphql";
import { CommentWhereUniqueInput } from "../../../@generated/prisma-nestjs-graphql/comment/comment-where-unique.input";
import { CommentWhereInput } from "../../../@generated/prisma-nestjs-graphql/comment/comment-where.input";
import { CommentAggregateArgs } from './../../../@generated/prisma-nestjs-graphql/comment/comment-aggregate.args';

export class AllCommentsQuery implements IQuery {
  constructor (
    public readonly where: CommentWhereInput,
    public readonly info: GraphQLResolveInfo,
  ) {
  }
}

export class OneCommentQuery implements IQuery {
  constructor (
    public readonly where: CommentWhereUniqueInput,
  ) {
  }
}


export class CommentAggregateQuery implements IQuery {
  constructor (
    public readonly args: CommentAggregateArgs,
  ) {
  }
}
