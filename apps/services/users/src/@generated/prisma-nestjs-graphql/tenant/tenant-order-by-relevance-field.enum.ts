import { registerEnumType } from '@nestjs/graphql';

export enum TenantOrderByRelevanceFieldEnum {
    id = "id",
    clientSecret = "clientSecret",
    name = "name",
    description = "description"
}


registerEnumType(TenantOrderByRelevanceFieldEnum, { name: 'TenantOrderByRelevanceFieldEnum', description: undefined })
