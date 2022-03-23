import { ObjectType, Directive, Field, ID } from "@nestjs/graphql";
import { Tag } from "../tag.model";


@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  @Directive('@external')
  id: string;


  @Field(() => [Tag])
  tags?: Tag[];
}
