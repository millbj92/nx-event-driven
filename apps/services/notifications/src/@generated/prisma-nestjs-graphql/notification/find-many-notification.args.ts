import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationWhereInput } from './notification-where.input';
import { NotificationOrderByWithRelationAndSearchRelevanceInput } from './notification-order-by-with-relation-and-search-relevance.input';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NotificationScalarFieldEnum } from './notification-scalar-field.enum';

@ArgsType()
export class FindManyNotificationArgs {

    @Field(() => NotificationWhereInput, {nullable:true})
    where?: NotificationWhereInput;

    @Field(() => [NotificationOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<NotificationOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => NotificationWhereUniqueInput, {nullable:true})
    cursor?: NotificationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NotificationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NotificationScalarFieldEnum>;
}
