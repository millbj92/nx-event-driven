import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => String, { description: 'Title of the post' })
  title: string;

  @Field(() => String, { description: 'Content of the post' })
  content?: string;

  @Field(() => Boolean, { description: 'Published of the post' })
  published?: boolean;

  @Field(() => String, {
    description: 'AuthorID of the post',
    defaultValue: '',
  })
  authorId: string;
}
