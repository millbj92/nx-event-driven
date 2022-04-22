import { BadRequestException, Body, Controller, Get, NotFoundException, Post, UsePipes } from '@nestjs/common';

import { AppService } from './app.service';
import { ITenant, IUserForLogin, TenantForSignUp, TokenRequest, UserForLogin, UserForRegister, VerificationToken } from './models';
import * as crypt from 'bcrypt';
import { UserValidationPipe } from './pipes/user-validation.pipe';
import { CreateUserSchema } from './pipes/create-user.schema';
import { User } from '@prisma/client/users';
import { CommandBus } from '@nestjs/cqrs';
import { LoginUserCommand, RegisterUserCommand, ResendVerificationCommand } from './cqrs/commands';
import { HealthCheckService, HealthCheck, MemoryHealthIndicator, DiskHealthIndicator } from '@nestjs/terminus';
import { getLogger } from '@super-rad-poc/services/shared';

@Controller()
export class AppController {
  logger = getLogger();
  constructor(
    private readonly appService: AppService,
    private readonly commandBus: CommandBus,
    private readonly health: HealthCheckService,
    private readonly memory: MemoryHealthIndicator,
    private readonly disk: DiskHealthIndicator,
  ) {

  }

  @Get('/.well-known/jwks')
  async jwks() {
    return await this.appService.jwks();
  }

  @Get('/.well-known/openid-configuration')
  async openidConfiguration() {
    return this.appService.openidConfiguration();
  }

  @Post('/authorize')
  async authorize(@Body() {email, password}: IUserForLogin) {
    console.log(email, password);
    const user = await this.appService.getUser(email.toLowerCase());
    if(!user) return new NotFoundException('User not found');

    const match = await crypt.compare(password, user.password);
    if(!match) return new BadRequestException('Invalid password');

    return await this.appService.signToken(user);
  }

  @Get('/add')
  async addKey() {
    return this.appService.addKey();
  }

  @Get('/del')
  async delKey() {
    return this.appService.delKey();
  }

  @Post('/register')
  @UsePipes(new UserValidationPipe(CreateUserSchema))
  async register(@Body() user: User) {
    const exists = await this.appService.getUser(user.email.toLowerCase());
    if(exists) return new BadRequestException('User already exists');
    return await this.commandBus.execute(new RegisterUserCommand(user));
  }

  @Post('/verify')
  async verify(@Body() {token}: VerificationToken) {
    return await this.appService.verifyUser(token);
  }

  @Post('/resendVerification')
  async resendVerification(@Body()  email: string) {
    return await this.commandBus.execute(new ResendVerificationCommand(email));
    //this.appService.resendVerification(email);
  }

  @Get("/rotate")
  async rotate() {
    return await this.appService.refreshAllKeys();
  }


  @Post('/registertenant')
  async tenantregister(@Body() tenant: TenantForSignUp) {
    return await this.appService.tenantRegister(tenant);
  }


  @Post('/requesttoken')
  async requestToken(@Body() request: TokenRequest) {
    console.log(request);
    const tenant = await this.appService.findTenantById(request.client_id);
    if(!tenant) return new NotFoundException('Tenant not found');

    const secretVerified = await this.appService.verifyTenantSecret(tenant);
    if(!secretVerified) return new BadRequestException('Invalid secret');
    const token = await this.authorize({
      email: request.username.toLowerCase(),
      password: request.password
    });
    console.log(token);
    return token;
  }

  @Get('/health')
  @HealthCheck()
  healthcheck() {
    return this.health.check([
      () => this.memory.checkHeap('memory_heap', 512 * 1024 * 1024),
      () => this.memory.checkRSS('memory_rss', 512 * 1024 * 1024),
      () => this.disk.checkStorage('storage', { threshold: 250 * 1024 * 1024 * 1024, path: '/' }),
    ])
  }
}
