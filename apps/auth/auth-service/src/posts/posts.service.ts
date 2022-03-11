import { Injectable } from '@nestjs/common';

import { PrismaService } from '../app/prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostsService {
  constructor(private prismaService: PrismaService) {}
  async create(createPostInput: CreatePostInput) {
    const newPost = await this.prismaService.post.create({
      data: {
        ...createPostInput,
      },
    });

    console.debug('Posts.create:', newPost);
    return newPost;
  }

  async findAll() {
    const data = await this.prismaService.post.findMany();
    console.debug('Posts.findAll:', data);
    return data;
  }

  async findAllByUserId(userId: string) {
    const data = await this.prismaService.post.findMany({
      where: {
        authorId: userId,
      },
    });
    console.debug('Posts.findAllByUserId:', data);
    return data;
  }

  async findOne(id: string) {
    const post = await this.prismaService.post.findUnique({
      where: { id },
    });
    console.debug('Posts.findOne:', post);
    return post;
  }

  async update(id: string, updatePostInput: UpdatePostInput) {
    const transfer = {
      where: {
        id,
      },
      data: {
        ...updatePostInput,
      },
    };
    const post = await this.prismaService.post.update(transfer);
    console.debug('Posts.update:', post);
    return post;
  }

  async remove(id: string) {
    const post = await this.prismaService.post.delete({
      where: { id },
    });
    console.debug('Posts.remove:', post);
    return post;
  }
}
