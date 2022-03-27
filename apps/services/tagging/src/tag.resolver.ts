import { Resolver, Query, Mutation, Args, Int, Info, ResolveField, Parent } from '@nestjs/graphql';
import { TagService } from './tag.service';
import { Tag } from './tag.model';
import { TagCreateInput } from './@generated/prisma-nestjs-graphql/tag/tag-create.input';
import { TagWhereInput } from './@generated/prisma-nestjs-graphql/tag/tag-where.input';
import { GraphQLResolveInfo } from 'graphql';
import { TagWhereUniqueInput } from './@generated/prisma-nestjs-graphql/tag/tag-where-unique.input';
import { TagUpdateInput } from './@generated/prisma-nestjs-graphql/tag/tag-update.input';

import { TagAggregateArgs } from './@generated/prisma-nestjs-graphql/tag/tag-aggregate.args';
import { User } from './users_connection/user.model';
import { Post } from './post_connection/post.model';
import { Comment } from './comment_connection/comment.model';
import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from '@super-rad-poc/services/shared';

@Resolver(() => Tag)
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  @Mutation(() => Tag)
  @UseGuards(AuthorizationGuard)
  async createTag(
    @Args('createTagInput') createTagInput: TagCreateInput
  ) {
    return await this.tagService.create(createTagInput);
  }

  @Query(() => [Tag], { name: 'tags' })
  async tags(
    @Args('where') where: TagWhereInput,
    @Info() info: GraphQLResolveInfo) {
    return await this.tagService.tags(where, info);
  }

  @Query(() => Tag, { name: 'tag', nullable: true })
  tag(@Args('tagWhereUniqueInput') tagWhereUniqueInput: TagWhereUniqueInput) {
    return this.tagService.tag(tagWhereUniqueInput);
  }

  @Query(() => Tag, {name: 'tagAggregate', nullable: true})
  tagAggregate(@Args() args: TagAggregateArgs) {
    return this.tagService.tagAggregate(args);
  }

  @Mutation(() => Tag, { name: 'updateTag', nullable: true })
  @UseGuards(AuthorizationGuard)
  updateTag(
    @Args('tagUpdateInput') tagUpdateInput: TagUpdateInput
  ) {
    return this.tagService.update(tagUpdateInput);
  }

  @Mutation(() => Tag, { name: 'removeTag', nullable: true })
  @UseGuards(AuthorizationGuard)
  removeTag(where: TagWhereUniqueInput) {
    return this.tagService.remove(where);
  }


  @ResolveField((of) => User)
  user(@Parent() tag: Tag): any {
    return { __typename: 'User', id: tag.userId};
  }

  @ResolveField((of) => Post, { nullable: true})
  post(@Parent() tag: Tag): any {
    return { __typename: 'Post', id: tag.id};
  }

  @ResolveField((of) => Comment, { nullable: true})
  comment(@Parent() tag: Tag): any {
    return { __typename: 'Comment', id: tag.id};
  }
}
