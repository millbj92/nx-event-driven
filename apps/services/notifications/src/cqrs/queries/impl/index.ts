import { QueryHandler } from "@nestjs/cqrs";
import { NotificationService } from "../../../notification.service";
import { AllNotificationsQuery, OneNotificationQuery } from '../interface/index';


@QueryHandler(AllNotificationsQuery)
export class AllNotificationsQueryHandler {
    constructor(
        private readonly service: NotificationService,
    ) {}

    async execute(query: AllNotificationsQuery) {
        const { where } = query;
        return this.service.notifications(where, null);
    }
}


@QueryHandler(OneNotificationQuery)
export class OneNotificationQueryHandler {
    constructor(
        private readonly service: NotificationService,
    ) {}

    async execute(query: OneNotificationQuery) {
        const { where } = query;
        return this.service.notification(where);
    }
}


