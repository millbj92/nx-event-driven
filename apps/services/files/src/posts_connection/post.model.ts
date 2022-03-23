import { ObjectType, Directive, Field, ID } from "@nestjs/graphql";
import { File } from "../file.model";


@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Post {
  @Field(() => ID)
  @Directive('@external')
  id: string;


  @Field(() => [File])
  files?: File[];
}
