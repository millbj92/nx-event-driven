import { Directive, Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Post } from './post_connection/post.model';
import { User } from './users_connection/user.model';
import { AggregateRoot, IEvent } from '@nestjs/cqrs';

import {
  CommentCreatedEvent,
  CommentDeletedEvent,
  CommentUpdatedEvent,
} from '@super-rad-poc/common/events';

@ObjectType()
@Directive('@key(fields: "id")')
export class Comment {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => String, {nullable:false})
    postId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User)
    user?: User;

    @Field(() => Post)
    post?: Post;
}


export class CommentAggregate extends AggregateRoot {
  public constructor (
    public readonly id: string,
    public readonly text: string,
    public readonly authorId: string,
    public readonly postId: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date
  ) {
    super();
  };

  created(): void {
    this.apply(new CommentCreatedEvent(this));
  }

  updated(): void {
    this.apply(new CommentUpdatedEvent(this));
  }

  deactivated(): void {
    this.apply(new CommentDeletedEvent(this));
  }

}
