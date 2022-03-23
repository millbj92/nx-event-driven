import { registerEnumType } from '@nestjs/graphql';

export enum MessageOrderByRelevanceFieldEnum {
    id = "id",
    text = "text",
    userIds = "userIds"
}


registerEnumType(MessageOrderByRelevanceFieldEnum, { name: 'MessageOrderByRelevanceFieldEnum', description: undefined })
