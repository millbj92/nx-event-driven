import { Controller, Delete, Get, Post as MPost, Put } from '@nestjs/common';

import { CreateUserInput } from '../users/dto/create-user.input';
import { UpdateUserInput } from './../users/dto/update-user.input';
import { UsersService } from './../users/users.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get('/:id')
  async findOne(id: string) {
    return await this.userService.findOne(id);
  }

  @Put('/:id/update')
  async update(id: string, updateUserInput: UpdateUserInput) {
    return await this.userService.update(id, updateUserInput);
  }

  @Delete('/:id/delete')
  async remove(id: string) {
    return await this.userService.remove(id);
  }

  @MPost()
  async create(createUserInput: CreateUserInput) {
    return await this.userService.register(createUserInput);
  }
}
