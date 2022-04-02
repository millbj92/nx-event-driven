import { registerEnumType } from '@nestjs/graphql';

export enum AddressOrderByRelevanceFieldEnum {
    id = "id",
    userId = "userId",
    street_address = "street_address",
    locality = "locality",
    region = "region",
    postal_code = "postal_code",
    country = "country"
}


registerEnumType(AddressOrderByRelevanceFieldEnum, { name: 'AddressOrderByRelevanceFieldEnum', description: undefined })
