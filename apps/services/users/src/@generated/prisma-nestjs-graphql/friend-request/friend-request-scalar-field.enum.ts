import { registerEnumType } from '@nestjs/graphql';

export enum FriendRequestScalarFieldEnum {
    id = "id",
    receiverId = "receiverId",
    senderId = "senderId",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FriendRequestScalarFieldEnum, { name: 'FriendRequestScalarFieldEnum', description: undefined })
