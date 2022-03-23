import { Directive, Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from './users_connection/user.model';
import { AggregateRoot } from '@nestjs/cqrs';
import { MessageCreatedEvent, MessageDeletedEvent, MessageUpdatedEvent } from '@super-rad-poc/common/events';

@ObjectType()
@Directive('@key(fields: "id")')
export class Message {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Boolean, {nullable:false})
    read!: boolean;

    @Field(() => [String], {nullable:true})
    userIds!: Array<string>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => [User], {nullable:true})
    users?: User[];
}


export class MessageAggregate extends AggregateRoot{
    constructor(
        public readonly id: string,
        public readonly userIds: string[],
        public readonly text: string,
        public readonly read: boolean,
        public readonly createdAt: Date
    ) {
        super();
    }
    created() {
      this.apply(new MessageCreatedEvent(this))
    }

    updated() {
      this.apply(new MessageUpdatedEvent(this))
    }

    deleted() {
      this.apply(new MessageDeletedEvent(this))
    }
}
