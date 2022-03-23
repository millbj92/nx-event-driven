import { AggregateRoot } from '@nestjs/cqrs';
import { Directive, Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PostCreatedEvent, PostDeletedEvent, PostUpdatedEvent } from '@super-rad-poc/common/events';
import { User } from './users_connection/user.model';

@ObjectType()
@Directive('@key(fields: "id")')
export class Post {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    published!: boolean;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => [String], {nullable:true})
    fileIds!: Array<string>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:true})
    author?: User;
}


export class PostAggregate extends AggregateRoot {
    constructor(
        public readonly id: string,
        public readonly content: string,
        public readonly published: boolean,
        public readonly authorId: string,
        public readonly fileIds: string[],
        public readonly createdAt: Date,
        public readonly updatedAt: Date
    ) {
        super();
    }
    created() {
      this.apply(new PostCreatedEvent(this))
    }

    updated() {
      this.apply(new PostUpdatedEvent(this))
    }

    deleted() {
      this.apply(new PostDeletedEvent(this))
    }
}
