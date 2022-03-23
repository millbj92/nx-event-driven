import { Info, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';
import { CommentWhereInput } from '../@generated/prisma-nestjs-graphql/comment/comment-where.input';
import { Comment } from '../comment.model';
import { CommentService } from '../comment.service';
import { Post } from './post.model';


@Resolver((of) => Post)
export class PostResolver {
  constructor(private readonly commentService: CommentService) {}

  @ResolveField((of) => [Comment])
  public async comments(
    @Parent() post: Post,
    @Info() info: GraphQLResolveInfo,
    ): Promise<Comment[]> {
    const where: CommentWhereInput = {
      postId: {
        equals: post.id
      }
    };
    return await this.commentService.comments(where, info);
  }
}
