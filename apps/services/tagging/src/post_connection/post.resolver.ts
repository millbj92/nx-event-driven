import { Info, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';
import { TagWhereInput } from '../@generated/prisma-nestjs-graphql/tag/tag-where.input';
import { Tag } from '../tag.model';
import { TagService } from '../tag.service';
import { Post } from './post.model';


@Resolver((of) => Post)
export class PostsResolver {
  constructor(private readonly tagService: TagService) {}

  @ResolveField((of) => [Tag])
  public async tags(
    @Parent() post: Post,
    @Info() info: GraphQLResolveInfo,
    ): Promise<Tag[]> {
    const where: TagWhereInput = {
      postId: {
        equals: post.id
      }
    };
    return await this.tagService.tags(where, info);
  }
}
