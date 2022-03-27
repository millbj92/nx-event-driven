import { Resolver, Query, Mutation, Args, Int, Info, ResolveField, Parent } from '@nestjs/graphql';
import { FileService } from './file.service';
import { File } from './file.model';
import { FileCreateInput } from './@generated/prisma-nestjs-graphql/file/file-create.input';
import { FileWhereInput } from './@generated/prisma-nestjs-graphql/file/file-where.input';
import { GraphQLResolveInfo } from 'graphql';
import { FileWhereUniqueInput } from './@generated/prisma-nestjs-graphql/file/file-where-unique.input';
import { FileUpdateInput } from './@generated/prisma-nestjs-graphql/file/file-update.input';

import { FileAggregateArgs } from './@generated/prisma-nestjs-graphql/file/file-aggregate.args';
import { User } from './users_connection/user.model';
import { Post } from './posts_connection/post.model';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateFileCommand, DeleteFileCommand } from './cqrs/commands/interface';
import { AllFilesQuery, OneFileQuery, FileAggregateQuery } from './cqrs/queries/interface/index';
import { UpdateFileCommand } from './cqrs/commands/interface/index';
import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from '@super-rad-poc/services/shared';

@Resolver(() => File)
export class FileResolver {
  constructor(
    private readonly fileService: FileService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
    ) {}

  @Mutation(() => File)
  @UseGuards(AuthorizationGuard)
  async createFile(
    @Args('createFileInput') createFileInput: FileCreateInput
  ) {
    return this.commandBus.execute(new CreateFileCommand(createFileInput));
    // await this.fileService.create(createFileInput);
  }

  @Query(() => [File], { name: 'files' })
  async files(
    @Args('where') where: FileWhereInput,
    @Info() info: GraphQLResolveInfo) {
    return this.queryBus.execute(new AllFilesQuery(where, info));
    //await this.fileService.files(where, info);
  }

  @Query(() => File, { name: 'file', nullable: true })
  file(@Args('fileWhereUniqueInput') fileWhereUniqueInput: FileWhereUniqueInput) {
    return this.queryBus.execute(new OneFileQuery(fileWhereUniqueInput));
    //this.fileService.file(fileWhereUniqueInput);
  }

  @Query(() => File, {name: 'fileAggregate', nullable: true})
  fileAggregate(@Args() args: FileAggregateArgs) {
    return this.queryBus.execute(new FileAggregateQuery(args));
    //this.fileService.fileAggregate(args);
  }

  @Mutation(() => File, { name: 'updateFile', nullable: true })
  @UseGuards(AuthorizationGuard)
  updateFile(
    @Args('fileUpdateInput') fileUpdateInput: FileUpdateInput
  ) {
    return this.commandBus.execute(new UpdateFileCommand(fileUpdateInput));
    //this.fileService.update(fileUpdateInput);
  }

  @Mutation(() => File, { name: 'removeFile', nullable: true })
  @UseGuards(AuthorizationGuard)
  removeFile(where: FileWhereUniqueInput) {
    return this.commandBus.execute(new DeleteFileCommand(where));
    //this.fileService.remove(where);
  }

  @ResolveField((of) => User)
  user(@Parent() file: File): any {
    return { __typename: 'User', id: file.userId};
  }

  @ResolveField((of) => Post)
  post(@Parent() file: File): any {
    return { __typename: 'File', id: file.postId};
  }
}
