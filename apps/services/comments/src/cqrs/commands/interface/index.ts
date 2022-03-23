import { Comment } from '@prisma/client/comments';
import { ICommand } from '@nestjs/cqrs'
import { CommentAggregate } from '../../../comment.model';
import { CommentCreateInput } from '../../../@generated/prisma-nestjs-graphql/comment/comment-create.input';
import { CommentUpdateInput } from './../../../@generated/prisma-nestjs-graphql/comment/comment-update.input';
import { CommentWhereUniqueInput } from './../../../@generated/prisma-nestjs-graphql/comment/comment-where-unique.input';
import { ICommentEvent } from '@super-rad-poc/common/events';

export interface ICommentCommand extends ICommand {
  comment: Comment;
};

abstract class CommentCommand implements ICommentCommand {
  constructor(public readonly comment: CommentAggregate) {}
}

export class CreateCommentCommand {
  constructor(public readonly comment: CommentCreateInput) {}
}

export class UpdateCommentCommand {
  constructor(public readonly comment: CommentUpdateInput) {}
}

export class DeleteCommentCommand {
  constructor(public readonly comment: CommentWhereUniqueInput) {}
}



export type CommentEventType = 'COMMENT_CREATED' | 'COMMENT_UPDATED' | 'COMMENT_DELETED';
export class SendKafkaCommand {
  constructor(public readonly comment: Comment, public readonly type: CommentEventType) {}
}
