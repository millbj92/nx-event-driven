import { registerEnumType } from '@nestjs/graphql';

export enum UserOrderByRelevanceFieldEnum {
    id = "id",
    email = "email",
    password = "password",
    verification = "verification",
    firstName = "firstName",
    lastName = "lastName"
}


registerEnumType(UserOrderByRelevanceFieldEnum, { name: 'UserOrderByRelevanceFieldEnum', description: undefined })
