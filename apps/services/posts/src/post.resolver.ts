import { Resolver, Query, Mutation, Args, Int, Info, ResolveField, Parent, ResolveReference } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './post.model';
import { PostCreateInput } from './@generated/prisma-nestjs-graphql/post/post-create.input';
import { PostWhereInput } from './@generated/prisma-nestjs-graphql/post/post-where.input';
import { GraphQLResolveInfo } from 'graphql';
import { PostWhereUniqueInput } from './@generated/prisma-nestjs-graphql/post/post-where-unique.input';
import { PostUpdateInput } from './@generated/prisma-nestjs-graphql/post/post-update.input';
import { AuthorizationGuard} from '@super-rad-poc/services/shared';
import { PostAggregateArgs } from './@generated/prisma-nestjs-graphql/post/post-aggregate.args';
import { PrismaSelect } from '@paljs/plugins';
import { User } from './users_connection/user.model';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post)
  @UseGuards(AuthorizationGuard)
  async createPost(
    @Args('createPostInput') createPostInput: PostCreateInput
  ) {
    return await this.postService.create(createPostInput);
  }

  @Query(() => [Post], { name: 'posts' })
  @UseGuards(AuthorizationGuard)
  async posts(
    @Args('where') where: PostWhereInput,
    @Info() info: GraphQLResolveInfo) {
    const select = new PrismaSelect(info).value;
    return await this.postService.posts(where, info);
  }

  @Query(() => Post, { name: 'post', nullable: true })
  post(@Args('postWhereUniqueInput') postWhereUniqueInput: PostWhereUniqueInput) {
    return this.postService.post(postWhereUniqueInput);
  }

  @Query(() => Post, {name: 'postAggregate', nullable: true})
  postAggregate(@Args() args: PostAggregateArgs) {
    return this.postService.postAggregate(args);
  }

  @Mutation(() => Post, { name: 'updatePost', nullable: true })
  @UseGuards(AuthorizationGuard)
  updatePost(
    @Args('postUpdateInput') postUpdateInput: PostUpdateInput
  ) {
    return this.postService.update(postUpdateInput);
  }

  @Mutation(() => Post, { name: 'removePost', nullable: true })
  @UseGuards(AuthorizationGuard)
  removePost(where: PostWhereUniqueInput) {
    return this.postService.remove(where);
  }

  @ResolveField((of) => User)
  author(@Parent() post: Post): any {
    return { __typename: 'User', id: post.authorId};
  }


  @ResolveReference()
   resolveRefernecen(reference: { __typename: string, id: string}): Promise<Post> {
    return this.postService.post({ id: reference.id });
  }
}
