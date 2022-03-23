import { QueryHandler } from "@nestjs/cqrs";
import { CommentService } from "../../../comment.service";
import { AllCommentsQuery, OneCommentQuery } from './../interface/index';

@QueryHandler(AllCommentsQuery)
export class AllCommentsQueryHandler {
    constructor(
        private readonly service: CommentService,
    ) {}

    async execute(query: AllCommentsQuery) {
        const { where } = query;
        return this.service.comments(where, null);
    }
}


@QueryHandler(OneCommentQuery)
export class OneCommentQueryHandler {
    constructor(
        private readonly service: CommentService,
    ) {}

    async execute(query: OneCommentQuery) {
        const { where } = query;
        return this.service.comment(where);
    }
}


export const QueryHandlers = [
    AllCommentsQueryHandler,
    OneCommentQueryHandler,
]

