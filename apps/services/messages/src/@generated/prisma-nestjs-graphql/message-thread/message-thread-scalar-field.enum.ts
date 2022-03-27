import { registerEnumType } from '@nestjs/graphql';

export enum MessageThreadScalarFieldEnum {
    id = "id",
    participants = "participants",
    messageIds = "messageIds",
    createdAt = "createdAt"
}


registerEnumType(MessageThreadScalarFieldEnum, { name: 'MessageThreadScalarFieldEnum', description: undefined })
