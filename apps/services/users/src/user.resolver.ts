import { Resolver, Query, Mutation, Args, Int, Info, ResolveReference } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.model';
import { UserCreateInput } from './@generated/prisma-nestjs-graphql/user/user-create.input';
import { UserWhereInput } from './@generated/prisma-nestjs-graphql/user/user-where.input';
import { GraphQLResolveInfo } from 'graphql';
import { UserWhereUniqueInput } from './@generated/prisma-nestjs-graphql/user/user-where-unique.input';
import { UserUpdateInput } from './@generated/prisma-nestjs-graphql/user/user-update.input';

import { UserAggregateArgs } from './@generated/prisma-nestjs-graphql/user/user-aggregate.args';
import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from '@super-rad-poc/services/shared';

import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload
} from '@nestjs/microservices';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService
    ) {}

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: UserCreateInput
  ) {
    return await this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  async users(
    @Args('where') where: UserWhereInput,
    @Info() info: GraphQLResolveInfo) {
    return await this.userService.users(where, info);
  }

  @Query(() => User, { name: 'user', nullable: true })
  user(@Args('userWhereUniqueInput') userWhereUniqueInput: UserWhereUniqueInput) {
    return this.userService.user(userWhereUniqueInput);
  }

  @Query(() => User, {name: 'userAggregate', nullable: true})
  userAggregate(@Args() args: UserAggregateArgs) {
    return this.userService.userAggregate(args);
  }

  @Mutation(() => User, { name: 'updateUser', nullable: true })
  @UseGuards(AuthorizationGuard)
  updateUser(
    @Args('userUpdateInput') userUpdateInput: UserUpdateInput
  ) {
    return this.userService.update(userUpdateInput);
  }

  @Mutation(() => User, { name: 'removeUser', nullable: true })
  @UseGuards(AuthorizationGuard)
  removeUser(where: UserWhereUniqueInput) {
    return this.userService.remove(where);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string, id: string}): Promise<User> {
    return this.userService.user({ id: reference.id });
  }
}
