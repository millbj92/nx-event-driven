import { registerEnumType } from '@nestjs/graphql';

export enum FileOrderByRelevanceFieldEnum {
    id = "id",
    userId = "userId",
    postId = "postId",
    name = "name",
    path = "path"
}


registerEnumType(FileOrderByRelevanceFieldEnum, { name: 'FileOrderByRelevanceFieldEnum', description: undefined })
