import { Field, ID, ObjectType } from '@nestjs/graphql';

import { User } from '../../users/entities/user.entity';

@ObjectType()
export class Post {
  @Field(() => ID, { description: 'ID Of the post' })
  id: string;

  @Field(() => String, { description: 'Title of the post' })
  title: string;

  @Field(() => String, { description: 'Content of the post' })
  content?: string;

  @Field(() => Boolean, { description: 'Published of the post' })
  published?: boolean;

  @Field(() => String, { description: 'Author of the post' })
  authorId: string;

  @Field(() => User, { description: 'Author of the post' })
  author?: User;
}
