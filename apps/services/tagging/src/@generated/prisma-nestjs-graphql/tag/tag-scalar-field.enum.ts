import { registerEnumType } from '@nestjs/graphql';

export enum TagScalarFieldEnum {
    id = "id",
    name = "name",
    userId = "userId",
    postId = "postId",
    commentId = "commentId",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TagScalarFieldEnum, { name: 'TagScalarFieldEnum', description: undefined })
