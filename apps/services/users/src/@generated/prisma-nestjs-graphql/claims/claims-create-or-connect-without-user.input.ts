import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClaimsWhereUniqueInput } from './claims-where-unique.input';
import { ClaimsCreateWithoutUserInput } from './claims-create-without-user.input';

@InputType()
export class ClaimsCreateOrConnectWithoutUserInput {

    @Field(() => ClaimsWhereUniqueInput, {nullable:false})
    where!: ClaimsWhereUniqueInput;

    @Field(() => ClaimsCreateWithoutUserInput, {nullable:false})
    create!: ClaimsCreateWithoutUserInput;
}
