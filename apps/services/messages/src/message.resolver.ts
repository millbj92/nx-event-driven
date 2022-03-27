import { Resolver, Query, Mutation, Args, Int, Info, Parent, ResolveField } from '@nestjs/graphql';
import { MessageService } from './message.service';
import { Message } from './message.model';
import { MessageCreateInput } from './@generated/prisma-nestjs-graphql/message/message-create.input';
import { MessageWhereInput } from './@generated/prisma-nestjs-graphql/message/message-where.input';
import { GraphQLResolveInfo } from 'graphql';
import { MessageWhereUniqueInput } from './@generated/prisma-nestjs-graphql/message/message-where-unique.input';
import { MessageUpdateInput } from './@generated/prisma-nestjs-graphql/message/message-update.input';

import { MessageAggregateArgs } from './@generated/prisma-nestjs-graphql/message/message-aggregate.args';
import { User } from './users_connection/user.model';

@Resolver(() => Message)
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}

  @Mutation(() => Message)
  async createMessage(
    @Args('createMessageInput') createMessageInput: MessageCreateInput
  ) {
    return await this.messageService.create(createMessageInput);
  }

  @Query(() => [Message], { name: 'messages' })
  async messages(
    @Args('where') where: MessageWhereInput,
    @Info() info: GraphQLResolveInfo) {
    return await this.messageService.messages(where, info);
  }

  @Query(() => Message, { name: 'message', nullable: true })
  message(@Args('messageWhereUniqueInput') messageWhereUniqueInput: MessageWhereUniqueInput) {
    return this.messageService.message(messageWhereUniqueInput);
  }

  @Query(() => Message, {name: 'messageAggregate', nullable: true})
  messageAggregate(@Args() args: MessageAggregateArgs) {
    return this.messageService.messageAggregate(args);
  }

  @Mutation(() => Message, { name: 'updateMessage', nullable: true })
  updateMessage(
    @Args('messageUpdateInput') messageUpdateInput: MessageUpdateInput
  ) {
    return this.messageService.update(messageUpdateInput);
  }

  @Mutation(() => Message, { name: 'removeMessage', nullable: true })
  removeMessage(where: MessageWhereUniqueInput) {
    return this.messageService.remove(where);
  }

  @ResolveField((of) => [User], { name: 'users' })
    users(@Parent() message: Message): any {
      return { __typename: 'User', id: message.participants.map(x => x === message.fromId) };
    }
}
