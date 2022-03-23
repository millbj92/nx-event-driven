import { Post } from '@prisma/client/posts';
import { ICommand } from '@nestjs/cqrs'
import { PostAggregate } from '../../../post.model';
import { PostCreateInput } from '../../../@generated/prisma-nestjs-graphql/post/post-create.input';
import { PostUpdateInput } from './../../../@generated/prisma-nestjs-graphql/post/post-update.input';
import { PostWhereUniqueInput } from './../../../@generated/prisma-nestjs-graphql/post/post-where-unique.input';

export interface IPostCommand extends ICommand {
  post: Post;
};

abstract class PostCommand implements IPostCommand {
  constructor(public readonly post: PostAggregate) {}
}

export class CreatePostCommand {
  constructor(public readonly post: PostCreateInput) {}
}

export class UpdatePostCommand {
  constructor(public readonly post: PostUpdateInput) {}
}

export class DeletePostCommand {
  constructor(public readonly post: PostWhereUniqueInput) {}
}

export type PostEventType = 'POST_CREATED' | 'POST_UPDATED' | 'POST_DELETED';
export class SendKafkaCommand {
  constructor(public readonly post: Post, public readonly type: PostEventType) {}
}
