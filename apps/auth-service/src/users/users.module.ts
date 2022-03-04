import { Module } from '@nestjs/common';

import { PrismaService } from './../app/prisma.service';
import { PostsService } from './../posts/posts.service';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  providers: [UsersResolver, UsersService, PrismaService, PostsService],
  exports: [UsersService],
})
export class UsersModule {}
