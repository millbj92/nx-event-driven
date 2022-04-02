import { Resolver, Query, Mutation, Args, Int, Info, ResolveReference, Parent, ResolveField } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { Comment, CommentAggregate } from './comment.model';
import { CommentCreateInput } from './@generated/prisma-nestjs-graphql/comment/comment-create.input';
import { CommentWhereInput } from './@generated/prisma-nestjs-graphql/comment/comment-where.input';
import { GraphQLResolveInfo } from 'graphql';
import { CommentWhereUniqueInput } from './@generated/prisma-nestjs-graphql/comment/comment-where-unique.input';
import { CommentUpdateInput } from './@generated/prisma-nestjs-graphql/comment/comment-update.input';
import { CommentAggregateArgs } from './@generated/prisma-nestjs-graphql/comment/comment-aggregate.args';
import { User } from './users_connection/user.model';
import { Post } from './post_connection/post.model';
import { AggregateRoot, CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCommentCommand, DeleteCommentCommand } from './cqrs/commands/interface';
import { AllCommentsQuery, OneCommentQuery, CommentAggregateQuery } from './cqrs/queries/interface/index';
import { UpdateCommentCommand } from './cqrs/commands/interface/index';
import { getLogger } from '@super-rad-poc/services/shared';
import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from '@super-rad-poc/services/shared';

@Resolver(() => Comment)
export class CommentResolver extends AggregateRoot<CommentAggregate> {
  logger = getLogger();
  constructor(
    private readonly commentService: CommentService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {
    super();
  }

  @Mutation(() => Comment)
  @UseGuards(AuthorizationGuard)
  async createComment(
    @Args('createCommentInput') createCommentInput: CommentCreateInput
  ): Promise<CommentAggregate> {
    this.logger.info('createCommentInput', createCommentInput);
    return await this.commandBus.execute<
    CreateCommentCommand,
    CommentAggregate
    >(new CreateCommentCommand(
      createCommentInput
    ));
  }

  @Query(() => [Comment], { name: 'comments' })
  async comments(
    @Args('where') where: CommentWhereInput,
    @Info() info: GraphQLResolveInfo) {
    return await this.queryBus.execute(
      new AllCommentsQuery(where, info)
    );
  }

  @Query(() => Comment, { name: 'comment', nullable: true })
  comment(@Args('commentWhereUniqueInput') commentWhereUniqueInput: CommentWhereUniqueInput) {
    return this.queryBus.execute<OneCommentQuery, CommentAggregate>(new OneCommentQuery(commentWhereUniqueInput));

    //this.commentService.comment(commentWhereUniqueInput);
  }

  @Query(() => Comment, {name: 'commentAggregate', nullable: true})
  commentAggregate(@Args() args: CommentAggregateArgs) {

    return this.queryBus.execute<CommentAggregateQuery, CommentAggregate>(new CommentAggregateQuery(args));
    //this.commentService.commentAggregate(args);
  }

  @Mutation(() => Comment, { name: 'updateComment', nullable: true })
  @UseGuards(AuthorizationGuard)
  updateComment(
    @Args('commentUpdateInput') commentUpdateInput: CommentUpdateInput
  ) {
    return this.commandBus.execute<UpdateCommentCommand, CommentAggregate>(new UpdateCommentCommand(commentUpdateInput));

    //this.commentService.update(commentUpdateInput);
  }

  @Mutation(() => Comment, { name: 'removeComment', nullable: true })
  @UseGuards(AuthorizationGuard)
  async removeComment(where: CommentWhereUniqueInput) {
    return this.commandBus.execute<DeleteCommentCommand, CommentAggregate>(new DeleteCommentCommand(where));
    //this.commentService.remove(where);
  }

  @ResolveReference()
  async resolveReference(reference: { __typename: string, id: string}): Promise<Comment> {
    return await this.commentService.comment({ id: reference.id });
  }

  @ResolveField((of) => User)
  user(@Parent() comment: Comment): any {
    return { __typename: 'User', id: comment.authorId};
  }


  @ResolveField((of) => Post)
  post(@Parent() comment: Comment): any {
    return { __typename: 'Post', id: comment.postId};
  }
}
