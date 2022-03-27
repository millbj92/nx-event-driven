import { Injectable, Logger } from "@nestjs/common";



@Injectable()
export class AppService {
    public handleUserLoggedIn(value: any) {
        Logger.log(value, "NotificationService");
    }
}