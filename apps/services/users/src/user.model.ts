import { AggregateRoot } from '@nestjs/cqrs';
import { Directive, Field, ResolveReference } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  verified!: boolean;

  @Field(() => String, { nullable: false })
  verification!: string;

  @Field(() => Boolean, { nullable: false, defaultValue: true })
  isActive!: boolean;

  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isBanned!: boolean;

  @Field(() => String, { nullable: false })
  firstName!: string;

  @Field(() => String, { nullable: false })
  lastName!: string;

  @Field(() => Int, { nullable: false, defaultValue: 0 })
  banDuration!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}
