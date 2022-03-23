import { ObjectType, Directive, Field, ID } from "@nestjs/graphql";
import { Notification } from "../notification.model";


@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  @Directive('@external')
  id: string;


  @Field(() => [Notification])
  notificatons?: [Notification];
}
