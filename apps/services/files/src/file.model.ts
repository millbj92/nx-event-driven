import { Directive, Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from './users_connection/user.model';
import { AggregateRoot } from '@nestjs/cqrs';
import { FileCreatedEvent, FileDeletedEvent, FileUpdatedEvent} from '@super-rad-poc/common/events';


@ObjectType()
@Directive('@key(fields: "id")')
export class File {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    postId!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => Int, {nullable:false})
    size!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User)
    user?: User;
}

export class FileAggregate extends AggregateRoot {
  public constructor (
    public readonly id: string,
    public readonly userId: string,
    public readonly postId: string,
    public readonly name: string,
    public readonly path: string,
    public readonly size: number,
    public readonly createdAt: Date,
    public readonly updatedAt: Date
  ) {
    super();
  };

  created(): void {
   this.apply(new FileCreatedEvent(this))
  }

  updated(): void {
    this.apply(new FileUpdatedEvent(this));
  }

  deleted(): void {
    this.apply(new FileDeletedEvent(this));
  }
}
