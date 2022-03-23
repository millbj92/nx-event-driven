import { registerEnumType } from '@nestjs/graphql';

export enum CommentOrderByRelevanceFieldEnum {
    id = "id",
    text = "text",
    authorId = "authorId",
    postId = "postId"
}


registerEnumType(CommentOrderByRelevanceFieldEnum, { name: 'CommentOrderByRelevanceFieldEnum', description: undefined })
