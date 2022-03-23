import { IQuery } from "@nestjs/cqrs";
import { GraphQLResolveInfo } from "graphql";
import { MessageWhereUniqueInput } from "../../../@generated/prisma-nestjs-graphql/message/message-where-unique.input";
import { MessageWhereInput } from "../../../@generated/prisma-nestjs-graphql/message/message-where.input";
import { MessageAggregateArgs } from './../../../@generated/prisma-nestjs-graphql/message/message-aggregate.args';

export class AllMessagesQuery implements IQuery {
  constructor (
    public readonly where: MessageWhereInput,
    public readonly info: GraphQLResolveInfo,
  ) {
  }
}

export class OneMessageQuery implements IQuery {
  constructor (
    public readonly where: MessageWhereUniqueInput,
  ) {
  }
}


export class MessageAggregateQuery implements IQuery {
  constructor (
    public readonly args: MessageAggregateArgs,
  ) {
  }
}
