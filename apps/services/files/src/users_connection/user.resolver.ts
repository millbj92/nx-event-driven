import { Info, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';
import { FileWhereInput } from '../@generated/prisma-nestjs-graphql/file/file-where.input';
import { File } from '../file.model';
import { FileService } from '../file.service';
import { User } from './user.model';


@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly fileService: FileService) {}

  @ResolveField((of) => [File])
  public async files(
    @Parent() user: User,
    @Info() info: GraphQLResolveInfo,
    ): Promise<File[]> {
    const where: FileWhereInput = {
      userId: {
        equals: user.id
      }
    };
    return await this.fileService.files(where, info);
  }
}
