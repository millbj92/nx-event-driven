import { Module } from '@nestjs/common';

import { PrismaService } from './../app/prisma.service';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  providers: [PostsResolver, PostsService, PrismaService],
  exports: [PostsService],
})
export class PostsModule {}
