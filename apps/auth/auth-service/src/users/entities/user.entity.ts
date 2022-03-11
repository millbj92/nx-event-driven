import { AggregateRoot } from '@nestjs/cqrs';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

import { Post } from '../../posts/entities/post.entity';
import { UserCreated } from '../events/user-created.event';
import { UserDeleted } from '../events/user-deleted.event';
import { UserLoggedIn } from '../events/user-logged-in.event';
import { UserUpdated } from '../events/user-updated.event';

@ObjectType()
export class User {
  @Field(() => ID, { description: 'Primary key of user' })
  id: string;

  @Field(() => String, { description: 'Users Name' })
  name: string;

  @Field(() => String, { description: 'Users Email' })
  email: string;

  @Field(() => String, { description: 'Users Password' })
  password: string;

  @Field(() => GraphQLISODateTime, { description: 'Users CreatedAt' })
  createdAt: Date;

  @Field(() => GraphQLISODateTime, { description: 'Users UpdatedAt' })
  updatedAt: Date;

  @Field(() => [Post], { description: 'Users Posts', defaultValue: [] })
  posts?: Post[];
}

export class UserAggregate extends AggregateRoot {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly name: string,
    public readonly jwt: string
  ) {
    super();
  }

  created(): void {
    this.apply(new UserCreated(this.id));
  }

  deleted(): void {
    this.apply(new UserDeleted(this.id));
  }

  updated(): void {
    this.apply(new UserUpdated(this.id));
  }

  loggedIn(): void {
    this.apply(new UserLoggedIn(this.id));
  }
}
