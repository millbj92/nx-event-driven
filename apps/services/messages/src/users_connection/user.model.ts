import { ObjectType, Directive, Field, ID } from "@nestjs/graphql";
import { Message } from "../message.model";


@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  @Directive('@external')
  id: string;


  @Field(() => [Message])
  messages?: Message[];
}
