import { ObjectType, Directive, Field, ID } from "@nestjs/graphql";
import { Comment } from "../comment.model";


@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Post {
  @Field(() => ID)
  @Directive('@external')
  id: string;


  @Field(() => [Comment])
  comments?: Comment[];
}
