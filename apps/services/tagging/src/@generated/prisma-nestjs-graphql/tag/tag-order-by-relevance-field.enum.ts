import { registerEnumType } from '@nestjs/graphql';

export enum TagOrderByRelevanceFieldEnum {
    id = "id",
    name = "name",
    userId = "userId",
    postId = "postId",
    description = "description"
}


registerEnumType(TagOrderByRelevanceFieldEnum, { name: 'TagOrderByRelevanceFieldEnum', description: undefined })
