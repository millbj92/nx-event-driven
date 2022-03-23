import { CanActivate, ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import { expressJwtSecret} from 'jwks-rsa'
import { promisify } from "util";
import * as jwt from 'express-jwt';
import { ConfigService } from '@nestjs/config';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthorizationGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const ctx = GqlExecutionContext.create(context);
        const req = ctx.getContext().req;
        const res = ctx.getContext().res;
        const checkJwt = promisify(jwt({
            secret: expressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `https://${process.env.AUTH0_DPMAIN}/.well-known/jwks.json`,
            }),
            audience: process.env.AUTH0_AUDIENCE,
            issuer: `https://${process.env.AUTH0_DPMAIN}/`,
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