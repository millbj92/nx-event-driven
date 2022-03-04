import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

import { CreatePostInput } from '../posts/dto/create-post.input';
import { UpdatePostInput } from '../posts/dto/update-post.input';
import { PostsService } from './../posts/posts.service';

@Controller({
  path: '/posts',
})
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  async findAll() {
    return await this.postService.findAll();
  }

  @Get('/:id')
  async findOne(id: string) {
    return await this.postService.findOne(id);
  }

  @Put('/:id/update')
  async update(id: string, updatePostInput: UpdatePostInput) {
    return await this.postService.update(id, updatePostInput);
  }

  @Delete('/:id/delete')
  async remove(id: string) {
    return await this.postService.remove(id);
  }

  @Post()
  async create(createPostInput: CreatePostInput) {
    return await this.postService.create(createPostInput);
  }
}
