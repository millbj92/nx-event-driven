import { registerEnumType } from '@nestjs/graphql';

export enum FileScalarFieldEnum {
    id = "id",
    userId = "userId",
    postId = "postId",
    name = "name",
    path = "path",
    size = "size",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FileScalarFieldEnum, { name: 'FileScalarFieldEnum', description: undefined })
