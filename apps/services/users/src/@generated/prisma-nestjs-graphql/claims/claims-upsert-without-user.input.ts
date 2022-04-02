import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClaimsUpdateWithoutUserInput } from './claims-update-without-user.input';
import { ClaimsCreateWithoutUserInput } from './claims-create-without-user.input';

@InputType()
export class ClaimsUpsertWithoutUserInput {

    @Field(() => ClaimsUpdateWithoutUserInput, {nullable:false})
    update!: ClaimsUpdateWithoutUserInput;

    @Field(() => ClaimsCreateWithoutUserInput, {nullable:false})
    create!: ClaimsCreateWithoutUserInput;
}
