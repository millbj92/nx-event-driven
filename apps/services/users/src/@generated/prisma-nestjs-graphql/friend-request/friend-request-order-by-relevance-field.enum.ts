import { registerEnumType } from '@nestjs/graphql';

export enum FriendRequestOrderByRelevanceFieldEnum {
    id = "id",
    receiverId = "receiverId",
    senderId = "senderId",
    status = "status"
}


registerEnumType(FriendRequestOrderByRelevanceFieldEnum, { name: 'FriendRequestOrderByRelevanceFieldEnum', description: undefined })
