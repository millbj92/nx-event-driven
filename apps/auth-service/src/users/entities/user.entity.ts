import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

import { Post } from '../../posts/entities/post.entity';

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
