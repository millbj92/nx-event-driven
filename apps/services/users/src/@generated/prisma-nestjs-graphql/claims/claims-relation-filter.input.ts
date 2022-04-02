import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClaimsWhereInput } from './claims-where.input';

@InputType()
export class ClaimsRelationFilter {

    @Field(() => ClaimsWhereInput, {nullable:true})
    is?: ClaimsWhereInput;

    @Field(() => ClaimsWhereInput, {nullable:true})
    isNot?: ClaimsWhereInput;
}
