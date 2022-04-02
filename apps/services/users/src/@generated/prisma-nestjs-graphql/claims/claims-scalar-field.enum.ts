import { registerEnumType } from '@nestjs/graphql';

export enum ClaimsScalarFieldEnum {
    id = "id",
    sub = "sub",
    name = "name",
    given_name = "given_name",
    family_name = "family_name",
    middle_name = "middle_name",
    nickname = "nickname",
    preferred_username = "preferred_username",
    profile = "profile",
    picture = "picture",
    website = "website",
    email = "email",
    email_verified = "email_verified",
    gender = "gender",
    birthdate = "birthdate",
    zoneInfo = "zoneInfo",
    locale = "locale",
    phone_number = "phone_number",
    phone_number_verified = "phone_number_verified",
    updated_at = "updated_at",
    createdAt = "createdAt"
}


registerEnumType(ClaimsScalarFieldEnum, { name: 'ClaimsScalarFieldEnum', description: undefined })
