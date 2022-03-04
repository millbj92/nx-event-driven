import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as crypt from 'bcrypt';

import { PrismaService } from './../app/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { LoginUserInput } from './dto/login-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService
  ) {}
  async findAll(): Promise<User[]> {
    const data = await this.prismaService.user.findMany();
    console.debug('Users.findAll:', data);
    return data;
  }

  async findOne(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
    console.debug('Users.findOne:', user);
    return user;
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    const transfer = {
      where: {
        id,
      },
      data: {
        ...updateUserInput,
        updatedAt: new Date(),
      },
    };
    console.debug('Users.update:', transfer);
    return this.prismaService.user.update(transfer);
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }

  async findOneByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    console.debug('Users.findOneByEmail:', user);
    return user;
  }

  async login(userLoginInput: LoginUserInput): Promise<string> {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: userLoginInput.email,
      },
    });
    if (user && (await crypt.compare(userLoginInput.password, user.password))) {
      const { password: _, ...result } = user;
      return this.jwtService.sign(result);
    } else {
      throw new BadRequestException('Invalid credentials');
    }
  }

  async register(createUserInput: CreateUserInput): Promise<string> {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: createUserInput.email,
      },
    });
    if (user) {
      throw new BadRequestException('User already exists');
    }
    const newUser = await this.prismaService.user.create({
      data: {
        ...createUserInput,
        password: await crypt.hash(createUserInput.password, 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    const { password: _, ...result } = newUser;
    {
      return this.jwtService.sign(result);
    }
  }
}
