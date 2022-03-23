import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    password = "password",
    verified = "verified",
    verification = "verification",
    isActive = "isActive",
    isBanned = "isBanned",
    firstName = "firstName",
    lastName = "lastName",
    banDuration = "banDuration",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
