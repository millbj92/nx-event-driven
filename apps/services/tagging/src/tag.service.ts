import { Inject, Injectable } from '@nestjs/common';
import { TagCreateInput } from './@generated/prisma-nestjs-graphql/tag/tag-create.input';
import { PrismaService } from './prisma.service';
import { TagWhereUniqueInput } from './@generated/prisma-nestjs-graphql/tag/tag-where-unique.input';
import { GraphQLResolveInfo } from 'graphql';
import { TagWhereInput } from './@generated/prisma-nestjs-graphql/tag/tag-where.input';
import { PrismaSelect } from '@paljs/plugins';
import { TagAggregateArgs } from './@generated/prisma-nestjs-graphql/tag/tag-aggregate.args';
import { TagUpdateInput } from './@generated/prisma-nestjs-graphql/tag/tag-update.input';
import { ClientKafka } from '@nestjs/microservices';
import { SendKafkaCommand } from '@super-rad-poc/common/events';
import { Tag } from './tag.model';


@Injectable()
export class TagService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject('TAG_SERVICE')private readonly client: ClientKafka
    ) {}

  async create(data: TagCreateInput) {
    return await this.prismaService.tag.create({
      data
    });
  }

  async tags(
    where: TagWhereInput,
    info: GraphQLResolveInfo
  ): Promise<Tag[] | null> {
    const select = new PrismaSelect(info).value;
    return await this.prismaService.tag.findMany({where,...select});
  };

  async tag(data: TagWhereUniqueInput): Promise<Tag | null> {
    return await this.prismaService.tag.findUnique({
      where:{
        ...data
      }
    });
  }

  async tagAggregate(args: TagAggregateArgs) {
    return await this.prismaService.tag.aggregate(args)
  }



 async update(args: TagUpdateInput) {

    return await this.prismaService.tag.update({
      where:{
        id: args.id.set
      },
      data: args
    });
  };

  async remove(tag:TagWhereUniqueInput) {
    return this.prismaService.tag.delete({
      where:{
        id: tag.id
      }
    });
  }

  async sendToKafka(data: SendKafkaCommand) {
    const { event } = data;
    return await this.client.emit(event.topic, event.data);
  }
}
