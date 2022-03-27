import { Controller, Inject, Logger } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService ) {}


  @EventPattern("user.loggedin")
    async userLoggedIn(data: any) {
       this.appService.handleUserLoggedIn(data.value);
    }
}
