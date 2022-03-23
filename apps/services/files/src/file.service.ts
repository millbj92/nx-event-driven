import { Inject, Injectable } from '@nestjs/common';
import { FileCreateInput } from './@generated/prisma-nestjs-graphql/file/file-create.input';
import { PrismaService } from './prisma.service';
import {
  File
} from '@prisma/client/files';
import { FileWhereUniqueInput } from './@generated/prisma-nestjs-graphql/file/file-where-unique.input';
import { GraphQLResolveInfo } from 'graphql';
import { FileWhereInput } from './@generated/prisma-nestjs-graphql/file/file-where.input';
import { PrismaSelect } from '@paljs/plugins';
import { FileAggregateArgs } from './@generated/prisma-nestjs-graphql/file/file-aggregate.args';
import { FileUpdateInput } from './@generated/prisma-nestjs-graphql/file/file-update.input';
import { SendKafkaCommand } from '@super-rad-poc/common/events';
import { ClientKafka } from '@nestjs/microservices';
import { tap } from 'rxjs';


@Injectable()
export class FileService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject("FILE_SERVICE") private readonly client: ClientKafka
  ) {}

  async create(data: FileCreateInput) {
    return await this.prismaService.file.create({
     data
    });
  }

  async files(
    where: FileWhereInput,
    info: GraphQLResolveInfo
  ): Promise<File[] | null> {
    const select = new PrismaSelect(info).value;
    return await this.prismaService.file.findMany({where,...select});
  };

  async file(data: FileWhereUniqueInput): Promise<File | null> {
    return await this.prismaService.file.findUnique({
      where:{
        ...data
      }
    });
  }

  async fileAggregate(args: FileAggregateArgs) {
    return await this.prismaService.file.aggregate(args)
  }



 async update(args: FileUpdateInput) {

    return await this.prismaService.file.update({
      where:{
        id: args.id.set
      },
      data: args
    });
  };

  async remove(file:FileWhereUniqueInput) {
    return this.prismaService.file.delete({
      where:{
        id: file.id
      }
    });
  }

  async sendKafka(command: SendKafkaCommand) {
    const { event } = command
    this.client.emit(event.topic, event.data).pipe(
      tap((event) => console.log(event))
    )
  }
}
