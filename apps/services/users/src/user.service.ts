import { Inject, Injectable } from '@nestjs/common';
import { UserCreateInput } from './@generated/prisma-nestjs-graphql/user/user-create.input';
import { PrismaService } from './prisma.service';
import {
  User
} from '@prisma/client/users';
import { UserWhereUniqueInput } from './@generated/prisma-nestjs-graphql/user/user-where-unique.input';
import { GraphQLResolveInfo } from 'graphql';
import { UserWhereInput } from './@generated/prisma-nestjs-graphql/user/user-where.input';
import { PrismaSelect } from '@paljs/plugins';
import { UserAggregateArgs } from './@generated/prisma-nestjs-graphql/user/user-aggregate.args';
import { UserUpdateInput } from './@generated/prisma-nestjs-graphql/user/user-update.input';
import { ClientKafka } from '@nestjs/microservices';
import { SendKafkaCommand } from '@super-rad-poc/common/events';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload
} from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject('USER_SERVICE') private readonly client: ClientKafka
  ) {}

  async create(data: UserCreateInput) {
    return await this.prismaService.user.create({
      data
    });
  }

  async users(
    where: UserWhereInput,
    info: GraphQLResolveInfo
  ): Promise<User[] | null> {
    const select = new PrismaSelect(info).value;
    return await this.prismaService.user.findMany({where,...select});
  };

  async user(data: UserWhereUniqueInput): Promise<User | null> {
    return await this.prismaService.user.findUnique({
      where:{
        ...data
      }
    });
  }

  async userAggregate(args: UserAggregateArgs) {
    return await this.prismaService.user.aggregate(args)
  }



 async update(args: UserUpdateInput) {

    return await this.prismaService.user.update({
      where:{
        id: args.id.set
      },
      data: args
    });
  };


  async activate(user: UserWhereUniqueInput) {
    return await this.prismaService.user.update({
      where:{
        id: user.id
      },
      data:{
        isActive: true
      }
    });
  }

  async deactivate(user: UserWhereUniqueInput) {
    return await this.prismaService.user.update({
      where:{
        id: user.id
      },
      data:{
        isActive: false
      }
    });
  }

  async verify (user: UserWhereUniqueInput) {
    return await this.prismaService.user.update({
      where:{
        id: user.id
      },

      data:{
        verified: true
      }
    });
  }

  async ban (user: UserWhereUniqueInput) {
    return await this.prismaService.user.update({
      where:{
        id: user.id
      },
      data:{
        isBanned: true
      }

    });
  }

  async unban (user: UserWhereUniqueInput) {
    return await this.prismaService.user.update({
      where:{
        id: user.id
      },
      data:{
        isBanned: false
      }
    });
  }

  async remove(user:UserWhereUniqueInput) {
    return this.prismaService.user.delete({
      where:{
        id: user.id
      }
    });
  }


  async sendToKafka(command: SendKafkaCommand) {
    const { event } = command;
    return await this.client.emit(event.topic, event.data);
  }


  @MessagePattern('user.registered')
  async userRegistered(@Payload() data: any, @Ctx() context: KafkaContext)  {
    const originalMsg = context.getMessage();
    const response =
     `New user registration: ${originalMsg.value}`;
    console.log(response);
    return response;
  }
}
