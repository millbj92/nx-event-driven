import { Tag } from '@prisma/client/tags';
import { ICommand } from '@nestjs/cqrs'
import { TagAggregate } from '../../../tag.model';
import { TagCreateInput } from '../../../@generated/prisma-nestjs-graphql/tag/tag-create.input';
import { TagUpdateInput } from './../../../@generated/prisma-nestjs-graphql/tag/tag-update.input';
import { TagWhereUniqueInput } from './../../../@generated/prisma-nestjs-graphql/tag/tag-where-unique.input';

export type ITagCommand = ICommand

export class CreateTagCommand implements ITagCommand {
  constructor(public readonly tag: TagCreateInput) {}
}

export class UpdateTagCommand implements ITagCommand {
  constructor(public readonly tag: TagUpdateInput) {}
}

export class DeleteTagCommand implements ITagCommand {
  constructor(public readonly tag: TagWhereUniqueInput) {}
}

export class SendKafkaCommand implements ITagCommand {
  constructor(public readonly event: Event) {}
}
