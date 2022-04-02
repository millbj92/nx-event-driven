import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    password = "password",
    verified = "verified",
    verification = "verification",
    isActive = "isActive",
    isBanned = "isBanned",
    middle_name = "middle_name",
    nickname = "nickname",
    preferred_username = "preferred_username",
    profile = "profile",
    picture = "picture",
    website = "website",
    gender = "gender",
    birthdate = "birthdate",
    zoneInfo = "zoneInfo",
    locale = "locale",
    phone_number = "phone_number",
    phone_number_verified = "phone_number_verified",
    firstName = "firstName",
    lastName = "lastName",
    banDuration = "banDuration",
    friendRequestIds = "friendRequestIds",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
