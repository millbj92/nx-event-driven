import { registerEnumType } from '@nestjs/graphql';

export enum MessageScalarFieldEnum {
    id = "id",
    threadId = "threadId",
    text = "text",
    fromId = "fromId",
    participants = "participants",
    participantReadIds = "participantReadIds",
    createdAt = "createdAt"
}


registerEnumType(MessageScalarFieldEnum, { name: 'MessageScalarFieldEnum', description: undefined })
