import { ObjectType, Directive, Field, ID } from "@nestjs/graphql";
import { Post } from "../post.model";


@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  @Directive('@external')
  id: string;

  
  @Field(() => [Post])
  posts?: Post[];
}
