import { QueryHandler } from "@nestjs/cqrs";
import { UserService } from "../../../user.service";
import { AllUsersQuery, OneUserQuery } from '../interface/index';


@QueryHandler(AllUsersQuery)
export class AllUsersQueryHandler {
    constructor(
        private readonly service: UserService,
    ) {}

    async execute(query: AllUsersQuery) {
        const { where } = query;
        return this.service.users(where, null);
    }
}


@QueryHandler(OneUserQuery)
export class OneUserQueryHandler {
    constructor(
        private readonly service: UserService,
    ) {}

    async execute(query: OneUserQuery) {
        const { where } = query;
        return this.service.user(where);
    }
}


