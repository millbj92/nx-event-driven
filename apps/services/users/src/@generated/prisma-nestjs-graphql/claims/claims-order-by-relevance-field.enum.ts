import { registerEnumType } from '@nestjs/graphql';

export enum ClaimsOrderByRelevanceFieldEnum {
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
    zoneInfo = "zoneInfo",
    locale = "locale",
    phone_number = "phone_number"
}


registerEnumType(ClaimsOrderByRelevanceFieldEnum, { name: 'ClaimsOrderByRelevanceFieldEnum', description: undefined })
