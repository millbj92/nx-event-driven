import { Inject, Injectable } from '@nestjs/common';
import { PostCreateInput } from './@generated/prisma-nestjs-graphql/post/post-create.input';
import { PrismaService } from './prisma.service';
import {
  Post
} from '@prisma/client/posts';
import { PostWhereUniqueInput } from './@generated/prisma-nestjs-graphql/post/post-where-unique.input';
import { GraphQLResolveInfo } from 'graphql';
import { PostWhereInput } from './@generated/prisma-nestjs-graphql/post/post-where.input';
import { PrismaSelect } from '@paljs/plugins';
import { PostAggregateArgs } from './@generated/prisma-nestjs-graphql/post/post-aggregate.args';
import { PostUpdateInput } from './@generated/prisma-nestjs-graphql/post/post-update.input';
import { ClientKafka } from '@nestjs/microservices';
import { SendKafkaCommand } from '@super-rad-poc/common/events';


@Injectable()
export class PostService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject("POST_SERVICE") private readonly client: ClientKafka
  ) {}

  async create(data: PostCreateInput) {
    return await this.prismaService.post.create({
      data
    });
  }

  async posts(
    where: PostWhereInput
  ): Promise<Post[] | null> {
    
    return await this.prismaService.post.findMany({where});
  };

  async post(data: PostWhereUniqueInput): Promise<Post | null> {
    return await this.prismaService.post.findUnique({
      where:{
        ...data
      }
    });
  }


  async postAggregate(args: PostAggregateArgs) {
    return await this.prismaService.post.aggregate({
      ...args
    });
  };

 async update(args: PostUpdateInput) {

    return await this.prismaService.post.update({
      where:{
        id: args.id.set
      },
      data: args
    });
  };

  async remove(post:PostWhereUniqueInput) {
    return this.prismaService.post.delete({
      where:{
        id: post.id
      }
    });
  }

  async sendToKafka(command: SendKafkaCommand) {
    const { event } = command;
    return this.client.emit(event.topic, event.data);
  }
}
