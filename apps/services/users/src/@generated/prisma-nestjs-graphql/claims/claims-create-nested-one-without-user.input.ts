import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClaimsCreateWithoutUserInput } from './claims-create-without-user.input';
import { ClaimsCreateOrConnectWithoutUserInput } from './claims-create-or-connect-without-user.input';
import { ClaimsWhereUniqueInput } from './claims-where-unique.input';

@InputType()
export class ClaimsCreateNestedOneWithoutUserInput {

    @Field(() => ClaimsCreateWithoutUserInput, {nullable:true})
    create?: ClaimsCreateWithoutUserInput;

    @Field(() => ClaimsCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: ClaimsCreateOrConnectWithoutUserInput;

    @Field(() => ClaimsWhereUniqueInput, {nullable:true})
    connect?: ClaimsWhereUniqueInput;
}
