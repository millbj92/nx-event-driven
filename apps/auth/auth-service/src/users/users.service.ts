import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as crypt from 'bcrypt';

import { PrismaService } from '../app/prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { LoginUserInput } from './dto/login-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserAggregate } from './entities/user.entity';

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

  async update(id: string, updateUserInput: UpdateUserInput) {
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
    const updated = await this.prismaService.user.update(transfer);
    const jwt = this.jwtService.sign(updated);
    return new UserAggregate(updated.id, updated.email, updated.name, jwt);
  }

  async remove(id: string) {
    const deleted = await this.prismaService.user.delete({
      where: {
        id,
      },
    });

    return new UserAggregate(deleted.id, deleted.email, deleted.name, '');
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

  async login(userLoginInput: LoginUserInput): Promise<UserAggregate> {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: userLoginInput.email,
      },
    });
    if (user && (await crypt.compare(userLoginInput.password, user.password))) {
      const { password: _, ...result } = user;
      const jwt = this.jwtService.sign(result);
      return new UserAggregate(result.id, result.email, result.name, jwt);
    } else {
      throw new BadRequestException('Invalid credentials');
    }
  }

  async register(createUserInput: CreateUserInput): Promise<UserAggregate> {
    const newUser = await this.prismaService.user.create({
      data: {
        ...createUserInput,
        password: await crypt.hash(createUserInput.password, 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    const { password: _, ...result } = newUser;
    const jwt = this.jwtService.sign(result);
    return new UserAggregate(result.id, result.email, result.name, jwt);
  }
}
