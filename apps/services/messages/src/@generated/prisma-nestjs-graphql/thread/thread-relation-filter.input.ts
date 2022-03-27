import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThreadWhereInput } from './thread-where.input';

@InputType()
export class ThreadRelationFilter {

    @Field(() => ThreadWhereInput, {nullable:true})
    is?: ThreadWhereInput;

    @Field(() => ThreadWhereInput, {nullable:true})
    isNot?: ThreadWhereInput;
}
