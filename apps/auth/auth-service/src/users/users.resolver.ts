import { BadRequestException, Inject, UsePipes } from '@nestjs/common';
import { AggregateRoot, CommandBus, QueryBus } from '@nestjs/cqrs';
import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { PrismaService } from '../app/prisma.service';
import { CreateUserCommand } from './commands/create-user.command';
import { DeleteUserCommand } from './commands/delete-user.command';
import { UserLoginCommand } from './commands/login.command';
import { UpdateUserCommand } from './commands/update-user.command';
import { CreateUserInput, CreateUserSchema } from './dto/create-user.input';
import { LoginUserInput } from './dto/login-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { PUB_SUB } from './pub-sub-provider';
import { UsersSearchParams } from './queries/all-users.query';
import { EmailSearchParams } from './queries/find-by-email.query';
import { IdSearchParams } from './queries/find-user.query';
import { UserValidationPipe } from './user-validation-pipe';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver extends AggregateRoot<User> {
  constructor(
    private readonly usersService: UsersService,
    private readonly prismaService: PrismaService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    @Inject(PUB_SUB) private readonly pubSub: PubSub
  ) {
    super();
  }
  @Query(() => [User], { name: 'users' })
  async findAll() {
    return await this.queryBus.execute(new UsersSearchParams());
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return await this.queryBus.execute(new IdSearchParams(id));
  }

  @Query(() => User)
  async me(@Args('id', { type: () => ID }) id: string) {
    return await this.queryBus.execute(new IdSearchParams(id));
  }

  @Query(() => User)
  async findByEmail(@Args('email', { type: () => String }) email: string) {
    return await this.queryBus.execute(new EmailSearchParams(email));
  }

  @Mutation(() => String, { name: 'login' })
  async login(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return await this.commandBus.execute(new UserLoginCommand(loginUserInput));
  }

  @UsePipes(new UserValidationPipe(CreateUserSchema))
  @Mutation(() => String, { name: 'register' })
  async register(
    @Args('createUserInput') createUserInput: CreateUserInput
  ): Promise<string> {
    const user = await this.usersService.findOneByEmail(createUserInput.email);
    if (user) {
      throw new BadRequestException('User already exists');
    }
    return await this.commandBus.execute(
      new CreateUserCommand(createUserInput)
    );
  }

  @Mutation(() => User)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return await this.commandBus.execute(
      new UpdateUserCommand(updateUserInput.id, updateUserInput)
    );
  }

  @Mutation(() => User)
  async removeUser(@Args('id', { type: () => ID }) id: string): Promise<User> {
    const user = this.usersService.findOne(id);
    if (!user) {
      throw new BadRequestException('User does not exist');
    }
    return await this.commandBus.execute(new DeleteUserCommand(id));
  }

  @ResolveField()
  async posts(@Parent() user: User) {
    const { id } = user;
    return this.prismaService.post.findMany({ where: { authorId: id } });
  }

  @Subscription(() => String)
  userCreated() {
    return this.pubSub.asyncIterator('userCreated');
  }

  @Subscription(() => String)
  userUpdated() {
    return this.pubSub.asyncIterator('userUpdated');
  }

  @Subscription(() => String)
  userRemoved() {
    return this.pubSub.asyncIterator('userRemoved');
  }

  @Subscription(() => String)
  userLoggedIn() {
    return this.pubSub.asyncIterator('userLoggedIn');
  }
}
