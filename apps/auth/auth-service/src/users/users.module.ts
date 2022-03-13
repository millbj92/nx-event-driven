import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtModule } from '@nestjs/jwt';

import { PrismaService } from '../app/prisma.service';
import { CreateUserHandler } from './commands/create-user.handler';
import { DeleteUserHandler } from './commands/delete-user.handler';
import { LoginUserHandler } from './commands/login.handler';
import { UpdateUserHandler } from './commands/update-user.handler';
import { UserCreatedHandler } from './events/user-created.event';
import { UserDeletedHandler } from './events/user-deleted.event';
import { UserLoggedInHandler } from './events/user-logged-in.event';
import { UserUpdatedHandler } from './events/user-updated.event';
import { pubSubProvider } from './pub-sub-provider';
import { AllUsersQuery } from './queries/all-users.query';
import { FindUserByEmailQuery } from './queries/find-by-email.query';
import { FindUserQuery } from './queries/find-user.query';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

export const CommandHandlers = [
  CreateUserHandler,
  UpdateUserHandler,
  DeleteUserHandler,
  LoginUserHandler,
];

export const EventHandlers = [
  UserCreatedHandler,
  UserUpdatedHandler,
  UserDeletedHandler,
  UserLoggedInHandler,
];

export const QueryHandlers = [
  AllUsersQuery,
  FindUserQuery,
  FindUserByEmailQuery,
];

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: '1h',
        },
      }),
      inject: [ConfigService],
    }),
    CqrsModule,
  ],
  providers: [
    pubSubProvider,
    UsersService,
    PrismaService,

    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,

    UsersResolver,
  ],
  exports: [UsersService],
})
export class UsersModule {}
