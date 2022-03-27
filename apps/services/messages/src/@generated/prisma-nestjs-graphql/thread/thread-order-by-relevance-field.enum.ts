import { registerEnumType } from '@nestjs/graphql';

export enum ThreadOrderByRelevanceFieldEnum {
    id = "id"
}


registerEnumType(ThreadOrderByRelevanceFieldEnum, { name: 'ThreadOrderByRelevanceFieldEnum', description: undefined })
