import { IQuery } from "@nestjs/cqrs";
import { GraphQLResolveInfo } from "graphql";
import { FileWhereUniqueInput } from "../../../@generated/prisma-nestjs-graphql/file/file-where-unique.input";
import { FileWhereInput } from "../../../@generated/prisma-nestjs-graphql/file/file-where.input";
import { FileAggregateArgs } from './../../../@generated/prisma-nestjs-graphql/file/file-aggregate.args';

export class AllFilesQuery implements IQuery {
  constructor (
    public readonly where: FileWhereInput,
    public readonly info: GraphQLResolveInfo,
  ) {
  }
}

export class OneFileQuery implements IQuery {
  constructor (
    public readonly where: FileWhereUniqueInput,
  ) {
  }
}


export class FileAggregateQuery implements IQuery {
  constructor (
    public readonly args: FileAggregateArgs,
  ) {
  }
}
