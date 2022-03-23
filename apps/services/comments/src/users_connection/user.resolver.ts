import { Info, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';
import { CommentWhereInput } from '../@generated/prisma-nestjs-graphql/comment/comment-where.input';
import { Comment } from '../comment.model';
import { CommentService } from '../comment.service';
import { User } from './user.model';


@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly commentService: CommentService) {}

  @ResolveField((of) => [Comment])
  public async comments(
    @Parent() user: User,
    @Info() info: GraphQLResolveInfo,
    ): Promise<Comment[]> {
    const where: CommentWhereInput = {
      authorId: {
        equals: user.id
      }
    };
    return await this.commentService.comments(where, info);
  }
}
