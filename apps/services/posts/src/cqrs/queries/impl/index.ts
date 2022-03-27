import { QueryHandler } from "@nestjs/cqrs";
import { PostService } from "../../../post.service";
import { AllPostsQuery, OnePostQuery } from '../interface/index';


@QueryHandler(AllPostsQuery)
export class AllPostsQueryHandler {
    constructor(
        private readonly service: PostService,
    ) {}

    async execute(query: AllPostsQuery) {
        const { where } = query;
        return this.service.posts(where);
    }
}


@QueryHandler(OnePostQuery)
export class OnePostQueryHandler {
    constructor(
        private readonly service: PostService,
    ) {}

    async execute(query: OnePostQuery) {
        const { where } = query;
        return this.service.post(where);
    }
}


