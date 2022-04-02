import { registerEnumType } from '@nestjs/graphql';

export enum TenantScalarFieldEnum {
    id = "id",
    clientSecret = "clientSecret",
    name = "name",
    description = "description",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TenantScalarFieldEnum, { name: 'TenantScalarFieldEnum', description: undefined })
