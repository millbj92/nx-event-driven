import { Info, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';
import { TagWhereInput } from '../@generated/prisma-nestjs-graphql/tag/tag-where.input';
import { Tag } from '../tag.model';
import { TagService } from '../tag.service';
import { Comment } from './comment.model';


@Resolver((of) => Comment)
export class CommentResolver {
  constructor(private readonly tagService: TagService) {}

  @ResolveField((of) => [Tag])
  public async tags(
    @Parent() comment: Comment,
    @Info() info: GraphQLResolveInfo,
    ): Promise<Tag[]> {
    const where: TagWhereInput = {
      commentId: {
        equals: comment.id,
      }
    };
    return await this.tagService.tags(where, info);
  }
}
