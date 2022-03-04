import { Field, ID, InputType, PartialType } from '@nestjs/graphql';

import { CreatePostInput } from './create-post.input';

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
  @Field(() => ID, { description: 'ID Of the post' })
  id: string;

  @Field(() => String, { description: 'Title of the post' })
  title: string;

  @Field(() => String, { description: 'Content of the post' })
  content?: string;

  @Field(() => Boolean, { description: 'Published of the post' })
  published?: boolean;

  @Field(() => String, { description: 'Author of the post' })
  authorId?: string;
}
