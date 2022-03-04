import { Args, ID, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { PrismaService } from '../app/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { LoginUserInput } from './dto/login-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly prismaService: PrismaService
  ) {}
  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.usersService.findOne(id);
  }

  @Query(() => User)
  async me(@Args('id', { type: () => ID }) id: string) {
    return this.usersService.findOne(id);
  }

  @Query(() => String, { name: 'jwt' })
  async login(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.usersService.login(loginUserInput);
  }

  @Mutation(() => User)
  async register(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.register(createUserInput);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => ID }) id: string) {
    return this.usersService.remove(id);
  }

  @ResolveField()
  async posts(@Parent() user: User) {
    const { id } = user;
    return this.prismaService.post.findMany({ where: { authorId: id } });
  }
}
