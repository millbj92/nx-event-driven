import { Module } from '@nestjs/common';

import { PrismaService } from './../app/prisma.service';
import { UsersService } from './../users/users.service';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  providers: [PostsResolver, PostsService, PrismaService, UsersService],
  exports: [PostsService],
})
export class PostsModule {}
