import { Directive, Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from './users_connection/user.model';
import { AggregateRoot } from '@nestjs/cqrs';
import { NotificationCreatedEvent, NotificationDeletedEvent, NotificationUpdatedEvent } from '@super-rad-poc/common/events';

@ObjectType()
@Directive('@key(fields: "id")')
export class Notification {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Boolean, {nullable:false})
    read!: boolean;

    @Field(() => User)
    user?: User;
}


export class NotificationAggregate extends AggregateRoot {
    constructor(
        public readonly id: string,
        public readonly userId: string,
        public readonly title: string,
        public readonly body: string,
        public readonly read: boolean,
        public readonly createdAt: Date,
        public readonly updatedAt: Date
    ) {
        super();
    }
    created() {
      this.apply(new NotificationCreatedEvent(this))
    }

    updated() {
      this.apply(new NotificationUpdatedEvent(this))
    }

    deleted() {
      this.apply(new NotificationDeletedEvent(this))
    }
}
