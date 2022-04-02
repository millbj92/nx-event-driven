import { registerEnumType } from '@nestjs/graphql';

export enum AddressScalarFieldEnum {
    id = "id",
    userId = "userId",
    street_address = "street_address",
    locality = "locality",
    region = "region",
    postal_code = "postal_code",
    country = "country",
    updated_at = "updated_at",
    createdAt = "createdAt"
}


registerEnumType(AddressScalarFieldEnum, { name: 'AddressScalarFieldEnum', description: undefined })
