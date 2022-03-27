import { CanActivate, Injectable, UnauthorizedException} from '@nestjs/common';
import { expressJwtSecret} from 'jwks-rsa'
import { promisify } from "util";
import * as jwt from 'express-jwt';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';


@Injectable()
export class AuthorizationGuard implements CanActivate {
    async canActivate(context: ExecutionContextHost): Promise<boolean> {
        const ctx = GqlExecutionContext.create(context);
        const req = ctx.getArgByIndex(2).req;
        const { headers } = req;
        const res = ctx.getArgByIndex(3);
        Logger.log('length ' + context.getArgs().length);
        Logger.log('auth ' + JSON.stringify(headers), 'AuthorizationGuard');
    
        const checkJwt = promisify(jwt({
            secret: expressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: 'https://dev--1y34yrm.us.auth0.com/.well-known/jwks.json',
            }),
            audience: 'https://api.sociium.io',
            issuer: 'https://auth.sociium.io/',
            algorithms: ['RS256']
        }));
        try {
            await checkJwt(req, res);
            return true
        } catch(error) {
            console.log(error);
            throw new UnauthorizedException(error);
        }
    }
}