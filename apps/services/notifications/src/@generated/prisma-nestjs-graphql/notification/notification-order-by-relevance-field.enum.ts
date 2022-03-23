import { registerEnumType } from '@nestjs/graphql';

export enum NotificationOrderByRelevanceFieldEnum {
    id = "id",
    userId = "userId",
    title = "title",
    body = "body"
}


registerEnumType(NotificationOrderByRelevanceFieldEnum, { name: 'NotificationOrderByRelevanceFieldEnum', description: undefined })
