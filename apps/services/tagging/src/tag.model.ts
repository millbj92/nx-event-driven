import { Directive, Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Comment } from './comment_connection/comment.model';
import { Post } from './post_connection/post.model';
import { User } from './users_connection/user.model';
import { AggregateRoot } from '@nestjs/cqrs';
import { TagCreatedEvent, TagDeletedEvent, TagUpdatedEvent } from '@super-rad-poc/common/events';

@ObjectType()
@Directive('@key(fields: "id")')
export class Tag {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    postId?: string;

    @Field(() => String, {nullable:true})
    comentId?: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Post, { nullable: true})
    post?: Post;

    @Field(() => User)
    user?: User;

    @Field(() => Comment, { nullable: true})
    comment?: Comment;

}


export class TagAggregate extends AggregateRoot {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly userId: string,
        public readonly postId: string,
        public readonly comentId: string,
        public readonly description: string,
        public readonly createdAt: Date,
        public readonly updatedAt: Date
    ) {
        super();
    }
    created() {
      this.apply(new TagCreatedEvent(this))
    }

    updated() {
      this.apply(new TagUpdatedEvent(this))
    }

    deleted() {
      this.apply(new TagDeletedEvent(this))
    }
}
