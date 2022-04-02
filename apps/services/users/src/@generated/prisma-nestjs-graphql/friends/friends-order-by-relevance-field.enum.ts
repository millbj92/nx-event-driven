import { registerEnumType } from '@nestjs/graphql';

export enum FriendsOrderByRelevanceFieldEnum {
    id = "id",
    userId = "userId",
    friendUserId = "friendUserId"
}


registerEnumType(FriendsOrderByRelevanceFieldEnum, { name: 'FriendsOrderByRelevanceFieldEnum', description: undefined })
