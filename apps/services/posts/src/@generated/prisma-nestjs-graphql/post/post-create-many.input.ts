import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreatefileIdsInput } from '../prisma/post-createfile-ids.input';

@InputType()
export class PostCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => PostCreatefileIdsInput, {nullable:true})
    fileIds?: PostCreatefileIdsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
