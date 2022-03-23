import { Inject, Injectable } from '@nestjs/common';
import { CommentCreateInput } from './@generated/prisma-nestjs-graphql/comment/comment-create.input';
import { PrismaService } from './prisma.service';
import {
  Comment
} from '@prisma/client/comments';
import { CommentWhereUniqueInput } from './@generated/prisma-nestjs-graphql/comment/comment-where-unique.input';
import { GraphQLResolveInfo } from 'graphql';
import { CommentWhereInput } from './@generated/prisma-nestjs-graphql/comment/comment-where.input';
import { PrismaSelect } from '@paljs/plugins';
import { CommentAggregateArgs } from './@generated/prisma-nestjs-graphql/comment/comment-aggregate.args';
import { CommentUpdateInput } from './@generated/prisma-nestjs-graphql/comment/comment-update.input';
import { SendKafkaCommand } from '@super-rad-poc/common/events';
import { ClientKafka } from '@nestjs/microservices';
import { tap } from 'rxjs';


@Injectable()
export class CommentService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject('COMMENT_SERVICE') private readonly client: ClientKafka
  ) {}

  async create(data: CommentCreateInput) {
    return await this.prismaService.comment.create({
      data
    });
  }

  async comments(
    where: CommentWhereInput,
    info: GraphQLResolveInfo
  ): Promise<Comment[] | null> {
    const select = new PrismaSelect(info).value;
    return await this.prismaService.comment.findMany({where,...select});
  };

  async comment(data: CommentWhereUniqueInput): Promise<Comment | null> {
    return await this.prismaService.comment.findUnique({
      where:{
        ...data
      }
    });
  }

  async commentAggregate(args: CommentAggregateArgs) {
    return await this.prismaService.comment.aggregate(args)
  }



 async update(args: CommentUpdateInput) {

    return await this.prismaService.comment.update({
      where:{
        id: args.id.set
      },
      data: args
    });
  };

  async remove(comment:CommentWhereUniqueInput) {
    return this.prismaService.comment.delete({
      where:{
        id: comment.id
      }
    });
  }


  async sendKafka (command: SendKafkaCommand) {
    const { event } = command
    this.client.emit(event.topic, event.data).pipe(
      tap((event) => console.log(event))
    );
  }
}
