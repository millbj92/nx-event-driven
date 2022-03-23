import { Info, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';
import { TagWhereInput } from '../@generated/prisma-nestjs-graphql/tag/tag-where.input';
import { Tag } from '../tag.model';
import { TagService } from '../tag.service';
import { User } from './user.model';


@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly tagService: TagService) {}

  @ResolveField((of) => [Tag])
  public async tags(
    @Parent() user: User,
    @Info() info: GraphQLResolveInfo,
    ): Promise<Tag[]> {
    const where: TagWhereInput = {
     userId: {
        equals: user.id,
     }
    };
    return await this.tagService.tags(where, info);
  }
}
