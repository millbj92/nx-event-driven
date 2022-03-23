import { QueryHandler } from "@nestjs/cqrs";
import { TagService } from "../../../tag.service";
import { AllTagsQuery, OneTagQuery } from '../interface/index';


@QueryHandler(AllTagsQuery)
export class AllTagsQueryHandler {
    constructor(
        private readonly service: TagService,
    ) {}

    async execute(query: AllTagsQuery) {
        const { where } = query;
        return this.service.tags(where, null);
    }
}


@QueryHandler(OneTagQuery)
export class OneTagQueryHandler {
    constructor(
        private readonly service: TagService,
    ) {}

    async execute(query: OneTagQuery) {
        const { where } = query;
        return this.service.tag(where);
    }
}


