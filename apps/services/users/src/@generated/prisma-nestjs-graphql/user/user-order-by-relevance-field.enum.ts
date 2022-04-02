import { registerEnumType } from '@nestjs/graphql';

export enum UserOrderByRelevanceFieldEnum {
    id = "id",
    email = "email",
    password = "password",
    verification = "verification",
    middle_name = "middle_name",
    nickname = "nickname",
    preferred_username = "preferred_username",
    profile = "profile",
    picture = "picture",
    website = "website",
    gender = "gender",
    zoneInfo = "zoneInfo",
    locale = "locale",
    phone_number = "phone_number",
    firstName = "firstName",
    lastName = "lastName",
    friendRequestIds = "friendRequestIds"
}


registerEnumType(UserOrderByRelevanceFieldEnum, { name: 'UserOrderByRelevanceFieldEnum', description: undefined })
