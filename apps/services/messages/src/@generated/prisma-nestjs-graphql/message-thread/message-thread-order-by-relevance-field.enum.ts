import { registerEnumType } from '@nestjs/graphql';

export enum MessageThreadOrderByRelevanceFieldEnum {
    id = "id",
    participants = "participants",
    messageIds = "messageIds"
}


registerEnumType(MessageThreadOrderByRelevanceFieldEnum, { name: 'MessageThreadOrderByRelevanceFieldEnum', description: undefined })
