import { Injectable } from '@nestjs/common';
import * as crypt from 'bcrypt';

import { PrismaService } from './../app/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  async create(createUserInput: CreateUserInput) {
    const transfer = {
      data: {
        ...createUserInput,
        password: await crypt.hash(createUserInput.password, 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    };
    const newUser = await this.prismaService.user.create(transfer);
    console.debug('Users.create:', newUser);
    return newUser;
  }

  async findAll(): Promise<User[]> {
    const data = await this.prismaService.user.findMany();
    console.debug('Users.findAll:', data);
    return data;
  }

  async findOne(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: id,
      },
    });
    console.debug('Users.findOne:', user);
    return user;
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
