import { Directive, Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from './users_connection/user.model';
import { AggregateRoot } from '@nestjs/cqrs';
import { MessageCreatedEvent, MessageDeletedEvent, MessageUpdatedEvent } from '@super-rad-poc/common/events';
import { Thread } from './thread.model';

@ObjectType()
@Directive('@key(fields: "id")')
export class Message {

  @Field(() => ID, {nullable:false})
  id!: string;

  @Field(() => String, {nullable:false})
  threadId!: string;

  @Field(() => Thread, {nullable:false})
  thread?: Thread;

  @Field(() => String, {nullable:false})
  text!: string;

  @Field(() => String, {nullable:false})
  fromId!: string;

  @Field(() => [String], {nullable:true})
  participants!: Array<string>;

  @Field(() => [String], {nullable:true})
  participantReadIds!: Array<string>;

  @Field(() => Date, {nullable:false})
  createdAt!: Date;

  @Field(() => [User], {nullable:true})
  users?: User[];
}


export class MessageAggregate extends AggregateRoot{
    constructor(
       public readonly id: string,
        public readonly threadId: string,
        public readonly text: string,
        public readonly fromId: string,
        public readonly participants: Array<string>,
        public readonly participantReadIds: Array<string>,
        public readonly createdAt: Date,
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
