import { registerEnumType } from '@nestjs/graphql';

export enum MessageOrderByRelevanceFieldEnum {
    id = "id",
    threadId = "threadId",
    text = "text",
    fromId = "fromId",
    participants = "participants",
    participantReadIds = "participantReadIds"
}


registerEnumType(MessageOrderByRelevanceFieldEnum, { name: 'MessageOrderByRelevanceFieldEnum', description: undefined })
