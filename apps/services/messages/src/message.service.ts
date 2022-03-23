import { Inject, Injectable } from '@nestjs/common';
import { MessageCreateInput } from './@generated/prisma-nestjs-graphql/message/message-create.input';
import { PrismaService } from './prisma.service';
import {
  Message
} from '@prisma/client/messages';
import { MessageWhereUniqueInput } from './@generated/prisma-nestjs-graphql/message/message-where-unique.input';
import { GraphQLResolveInfo } from 'graphql';
import { MessageWhereInput } from './@generated/prisma-nestjs-graphql/message/message-where.input';
import { PrismaSelect } from '@paljs/plugins';
import { MessageAggregateArgs } from './@generated/prisma-nestjs-graphql/message/message-aggregate.args';
import { MessageUpdateInput } from './@generated/prisma-nestjs-graphql/message/message-update.input';
import { SendKafkaCommand } from '@super-rad-poc/common/events';
import { ClientKafka } from '@nestjs/microservices';
import { tap } from 'rxjs';


@Injectable()
export class MessageService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject("MESSAGE_SERVICE") private readonly client: ClientKafka
  ) {}

  async create(data: MessageCreateInput) {
    return await this.prismaService.message.create({
      data
    });
  }

  async messages(
    where: MessageWhereInput,
    info: GraphQLResolveInfo
  ): Promise<Message[] | null> {
    const select = new PrismaSelect(info).value;
    return await this.prismaService.message.findMany({where,...select});
  };

  async message(data: MessageWhereUniqueInput): Promise<Message | null> {
    return await this.prismaService.message.findUnique({
      where:{
        ...data
      }
    });
  }

  async messageAggregate(args: MessageAggregateArgs) {
    return await this.prismaService.message.aggregate(args)
  }



 async update(args: MessageUpdateInput) {

    return await this.prismaService.message.update({
      where:{
        id: args.id.set
      },
      data: args
    });
  };

  async remove(message:MessageWhereUniqueInput) {
    return this.prismaService.message.delete({
      where:{
        id: message.id
      }
    });
  }


  async sendToKafka(command: SendKafkaCommand) {
    const { event } = command;
    this.client.emit(event.topic, event.data).pipe(
      tap((event) => console.log(event))
    );
  }
}
