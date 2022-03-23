import { Info, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';
import { FileWhereInput } from '../@generated/prisma-nestjs-graphql/file/file-where.input';
import { File } from '../file.model';
import { FileService } from '../file.service';
import { Post } from './post.model';


@Resolver((of) => Post)
export class PostResolver {
  constructor(private readonly fileService: FileService) {}

  @ResolveField((of) => [File])
  public async files(
    @Parent() post: Post,
    @Info() info: GraphQLResolveInfo,
    ): Promise<File[]> {
    const where: FileWhereInput = {
      postId: {
        equals: post.id
      }
    };
    return await this.fileService.files(where, info);
  }
}
