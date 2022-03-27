import { registerEnumType } from '@nestjs/graphql';

export enum ThreadScalarFieldEnum {
    id = "id",
    createdAt = "createdAt"
}


registerEnumType(ThreadScalarFieldEnum, { name: 'ThreadScalarFieldEnum', description: undefined })
