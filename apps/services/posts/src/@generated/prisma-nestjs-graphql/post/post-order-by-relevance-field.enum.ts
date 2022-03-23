import { registerEnumType } from '@nestjs/graphql';

export enum PostOrderByRelevanceFieldEnum {
    id = "id",
    content = "content",
    authorId = "authorId",
    fileIds = "fileIds"
}


registerEnumType(PostOrderByRelevanceFieldEnum, { name: 'PostOrderByRelevanceFieldEnum', description: undefined })
