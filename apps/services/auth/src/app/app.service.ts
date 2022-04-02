import { BadRequestException, Get, Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { JWK, JWS } from 'node-jose';
import * as fs from 'fs';
import { join } from 'path';
import { verify } from 'jsonwebtoken';
import { User, Tenant } from '@prisma/client/users';
import { PrismaService } from './prisma.service';
import * as crypt from 'bcrypt';
import { DateTime } from 'luxon';
import { v4 } from 'uuid';
import { SendKafkaCommand } from '@super-rad-poc/common/events';
import { ClientKafka, EventPattern } from '@nestjs/microservices';
import { tap } from 'rxjs';
import { getLogger } from '@super-rad-poc/services/shared';
import * as jwkToPem from 'jwk-to-pem';
import * as jwt from 'jsonwebtoken';
import { ITenant, TenantForSignUp } from './models';


@Injectable()
export class AppService {
  private readonly logger = getLogger("Auth Service");
  private keyStore = JWK.createKeyStore();
  private readonly keyfilePath = join(__dirname, 'public', '.well-known', 'jwks.json');
  private readonly certDir = join(__dirname, 'public', 'certs');
  constructor(
    private readonly prismaService: PrismaService,
    @Inject(process.env.KAFKA_SERVICE_NAME) private readonly client: ClientKafka
  ) {
    this.Init();
  }


  async Init() {
    if(!fs.existsSync(this.keyfilePath)) {
      if(!fs.existsSync(this.certDir)) {
        fs.mkdirSync(this.certDir);
      }
    await this.keyStore.generate('RSA', 2048, {alg: 'RS256', use: 'sig'});
    fs.writeFileSync(this.keyfilePath, JSON.stringify(this.keyStore.toJSON(true)));
    } else {
      const ks = fs.readFileSync(this.keyfilePath);
      this.keyStore = await JWK.asKeyStore(ks.toString());
    }

    const diff = this.keyStore.all({use: 'sig'}).length  - 2;
    for(let i = 0; i < Math.abs(diff); i++) {
      await this.addKey()
    }
  }


  //#region database

  async getUser(email: string) {
    return await this.prismaService.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        password: true,
        firstName: true,
        lastName: true,
        picture: true,
      },
    });
  }

  //#endregion



  //#region auth
  async signToken(user: Partial<User>) {
    const key = this.keyStore.all({ use: 'sig' })[0];
    const opt = {compact: true, jwk: key, fields: { typ: 'jwt' } };
    const { password, ...rest } = user;
    const payload = JSON.stringify({
      exp: Math.floor(DateTime.now().plus({days: 1}).toUnixInteger()),
      iat: Math.floor(DateTime.now().toUnixInteger()),
      sub: user.id,
      iss: 'https://sociium.io',
      aud: 'https://sociium.io',
      data: {
       name: `${user.firstName} ${user.lastName}`,
       picture: user.picture,
       given_name: user.firstName,
       family_name: user.lastName,
       email: user.email,
       locale: 'en-US',
      },
      scope: 'openid profile email',
      kid: key.kid,
    });


    const token = await JWS.createSign(opt, key)
    .update(payload)
    .final() as unknown as string;

    this.logger.info('JWT Created: ' + token);
    const v = await JWS.createVerify(this.keyStore).verify(token);
    this.logger.info('JWT Verified? '  +  v.header.toString());
    this.logger.info(v.payload.toString())


    //Jsonwebtoken
    const publicKey = key.toPEM();
    const privateKey  = key.toPEM(true);

    this.logger.info('Public Key: ' + publicKey);
    this.logger.info('Private Key: ' + privateKey);

     const decoded = jwt?.verify(token.toString(), publicKey);
     console.log(decoded);
    return {
      token
    }
  }

  async register(user: User) {
    const password = await crypt.hash(user.password, 10);
    const key = this.keyStore.all({ use: 'sig' })[0];
    const opt = { compact: true, jwk: key, fields: { typ: 'jwt' } };
    const idToken = JSON.stringify({
      exp: Math.floor(DateTime.now().plus({days: 5}).toUnixInteger()),
      iat: Math.floor(DateTime.now().toUnixInteger()),
      sub: user.email.toLocaleLowerCase(),
      iss: 'http://localhost:5002',
      aud: process.env.JWT_AUDIENCE,
      scope: 'openid profile email'
    });

    const { email, ...rest} = user;
    const lowerCaseEmail = email.toLowerCase();

    const verification = await JWS.createSign(opt, key)
    .update(idToken)
    .final() as unknown as string;

    const newUser = {
      ...user,
      email: lowerCaseEmail,
      password,
      verification,
      createdAt: DateTime.local().toISO(),
      updatedAt: DateTime.local().toISO()
    }
    const userCreated = await this.prismaService.user.create({
      data: newUser
    });
    return userCreated;
  }
  //#endregion


  //#region Tenant
  async tenantRegister(tenant: TenantForSignUp) {
    const tenantCreated = await this.prismaService.tenant.create({
      data: {
        ...tenant,
      }
    });
    return tenantCreated;
  }


  async findTenantById(id: string) {
    return await this.prismaService.tenant.findUnique({
      where: {
        id,
      }
    });
  }


  async verifyTenantSecret(tenant: ITenant) {
    const found = await this.prismaService.tenant.findUnique({
      where: {
        id: tenant.id,
      },
      select: {
        clientSecret: true,
      }
    });
    return found.clientSecret  === tenant.clientSecret;
  }
  //#endregion

  //#region Key management

  async refreshAllKeys() {
    this.keyStore.all({ use: 'sig' }).forEach(key => {
      this.keyStore.remove(key);
    });

    for( let i = 0; i < 2; i++) {
     await this.genKey();
    }

    const json = this.keyStore.toJSON(true);
    fs.writeFileSync(join(__dirname, 'public', '.well-known',  'jwks.json'), JSON.stringify(json));
    return this.keyStore.toJSON();
  }


  async addKey() {
    await this.keyStore.generate('RSA', 2048, {alg: 'RS256', use: 'sig'});
      fs.writeFileSync(join(__dirname, 'public', '.well-known',  'jwks.json'),
        JSON.stringify(this.keyStore.toJSON(true), null, ' ')
      );
      return this.keyStore.toJSON();
  }

  async delKey() {
    if(this.keyStore.all({ use: 'sig' }).length < 2) return new BadRequestException('You need at least one key');
    this.keyStore.remove(this.keyStore.all({ use: 'sig' })[0]);
    const json = this.keyStore.toJSON(true);
    fs.writeFileSync(join(__dirname, 'public', '.well-known',  'jwks.json'), JSON.stringify(json));
    return this.keyStore.toJSON();
  }

  async rotateKeys() {
    const key = this.keyStore.all({ use: 'sig' })[0];
    this.keyStore.remove(key);
    await this.addKey();
    return this.keyStore.toJSON();
  }


  private async tryGenKeys() {
    const ks = fs.readFileSync(join(__dirname, 'public', '.well-known', 'jwks.json'));
     this.keyStore = await JWK.asKeyStore(ks.toString());
    const diff = this.keyStore.all({ use: 'sig' }).length - 2;
    this.logger.info(diff);
      for(let i = 0; i < Math.abs(diff); i++) {
        await this.addKey()
      }

    this.logger.info(this.keyStore.toJSON());
  }

  private async genKey() {
    await this.keyStore.generate('RSA', 2048, {
      alg: 'RS256',
      use: 'sig',
    });



    fs.writeFileSync(
      join(__dirname, 'public', '.well-known',  'jwks.json'),
      JSON.stringify(this.keyStore.toJSON(true), null, ' ')
    );
  }


  //#endregion


  //#region Email Verification
  public async verifyUser(verification: string) {
    //Logger.log(verification);
    const user = await this.prismaService.user.findUnique({
      where: {
        verification
      }
    });

    if(!user) throw new BadRequestException('Invalid verification');

    const decoded = verify(verification, this.keyStore.all({ use: 'sig' })[0].toPEM());
    if(!decoded) throw new BadRequestException('Invalid verification');

    const verifiedUser = await this.prismaService.user.update({
      where: {
        id: user.id
      },
      data: {
        verified: true
      }
    })
    return user;
  }

  async resendVerification(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email
      }
    });
    if(!user) throw new NotFoundException('User Not Found');

    const key = this.keyStore.all({ use: 'sig' })[0];
    const opt = { compact: true, jwk: key, fields: { typ: 'jwt' } };
    const idToken = JSON.stringify({
      exp: Math.floor(DateTime.now().plus({days: 5}).toUnixInteger()),
      iat: Math.floor(DateTime.now().toUnixInteger()),
      sub: user.email,
      iss: 'http://localhost:5002',
      aud: process.env.JWT_AUDIENCE,
      scope: 'openid profile email'
    });
    const verification = await JWS.createSign(opt, key)
    .update(idToken)
    .final() as unknown as string;

    const updatedUser = await this.prismaService.user.update({
      where: {
        id: user.id
      },
      data: {
        verification
      }
    });
    return updatedUser;
  }

  //#endregion


  //#region Events

  async sendKafka(command: SendKafkaCommand) {
    const { event } = command
    this.client.emit(event.topic, event.data);
  }

  //#endregion

  //#region OIDC

  async jwks() {
    return this.keyStore.toJSON();
  }

  async openidConfiguration() {
    const config = fs.readFileSync(join(__dirname, 'public', '.well-known', 'openid-configuration.json'));
    return JSON.parse(config.toString());
  }

  //#endregion
}
