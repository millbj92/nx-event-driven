import { Info, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';
import { MessageWhereInput } from '../@generated/prisma-nestjs-graphql/message/message-where.input';
import { Message } from '../message.model';
import { MessageService } from '../message.service';
import { User } from './user.model';


@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly messageService: MessageService) {}

  @ResolveField((of) => [Message])
  public async messages(
    @Parent() user: User,
    @Info() info: GraphQLResolveInfo,
    ): Promise<Message[]> {
    const where: MessageWhereInput = {
       participants: {
          has: user.id
        },
    };
    return await this.messageService.messages(where, info);
  }
}
