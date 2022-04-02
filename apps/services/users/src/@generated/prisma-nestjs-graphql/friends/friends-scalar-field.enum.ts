import { registerEnumType } from '@nestjs/graphql';

export enum FriendsScalarFieldEnum {
    id = "id",
    userId = "userId",
    friendUserId = "friendUserId",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FriendsScalarFieldEnum, { name: 'FriendsScalarFieldEnum', description: undefined })
