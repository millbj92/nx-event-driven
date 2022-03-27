import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { AppService } from "./app.service";
import { getLogger } from "@super-rad-poc/common/models";

@Injectable()
export class TasksService {
    private readonly logger = getLogger("Tasks Service");
    constructor(
        private readonly appService: AppService
    ) {}

    @Cron('30 03 01 */3 *')
    //Auto-rotate keys every 3 months
    async handleCron() {
        this.logger.info("Rotating keys");
        await this.appService.rotateKeys();

        this.logger.info("Keys successfully rotated");
    };

}