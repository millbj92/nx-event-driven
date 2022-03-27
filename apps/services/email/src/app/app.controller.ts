import { Controller, Get, Logger } from '@nestjs/common';

import { AppService } from './app.service';
import {
  Ctx,
  KafkaContext,
  EventPattern,
  Payload
} from '@nestjs/microservices';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

   @EventPattern('user.created')
    async userCreated(data: any) {
      this.appService.sendVerificationEmail(data.value);
    }

    @EventPattern('user.verification.resend')
    async resendVerification(data: any) {
      this.appService.sendVerificationEmail(data.value);
    }
}
