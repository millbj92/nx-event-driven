import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClaimsCreateWithoutUserInput } from './claims-create-without-user.input';
import { ClaimsCreateOrConnectWithoutUserInput } from './claims-create-or-connect-without-user.input';
import { ClaimsUpsertWithoutUserInput } from './claims-upsert-without-user.input';
import { ClaimsWhereUniqueInput } from './claims-where-unique.input';
import { ClaimsUpdateWithoutUserInput } from './claims-update-without-user.input';

@InputType()
export class ClaimsUpdateOneRequiredWithoutUserInput {

    @Field(() => ClaimsCreateWithoutUserInput, {nullable:true})
    create?: ClaimsCreateWithoutUserInput;

    @Field(() => ClaimsCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: ClaimsCreateOrConnectWithoutUserInput;

    @Field(() => ClaimsUpsertWithoutUserInput, {nullable:true})
    upsert?: ClaimsUpsertWithoutUserInput;

    @Field(() => ClaimsWhereUniqueInput, {nullable:true})
    connect?: ClaimsWhereUniqueInput;

    @Field(() => ClaimsUpdateWithoutUserInput, {nullable:true})
    update?: ClaimsUpdateWithoutUserInput;
}
