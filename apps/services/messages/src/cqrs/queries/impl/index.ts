import { QueryHandler } from "@nestjs/cqrs";
import { MessageService } from "../../../message.service";
import { AllMessagesQuery, OneMessageQuery } from '../interface/index';


@QueryHandler(AllMessagesQuery)
export class AllMessagesQueryHandler {
    constructor(
        private readonly service: MessageService,
    ) {}

    async execute(query: AllMessagesQuery) {
        const { where } = query;
        return this.service.messages(where, null);
    }
}


@QueryHandler(OneMessageQuery)
export class OneMessageQueryHandler {
    constructor(
        private readonly service: MessageService,
    ) {}

    async execute(query: OneMessageQuery) {
        const { where } = query;
        return this.service.message(where);
    }
}


