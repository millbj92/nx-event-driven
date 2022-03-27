import { Info, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';
import { PostWhereInput } from '../@generated/prisma-nestjs-graphql/post/post-where.input';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { User } from './user.model';


@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly postService: PostService) {}

  @ResolveField((of) => [Post])
  public async posts(
    @Parent() user: User,
    @Info() info: GraphQLResolveInfo,
    ): Promise<Post[]> {
    const where: PostWhereInput = {
      authorId: {
        equals: user.id
      }
    };
    return await this.postService.posts(where);
  }
}
