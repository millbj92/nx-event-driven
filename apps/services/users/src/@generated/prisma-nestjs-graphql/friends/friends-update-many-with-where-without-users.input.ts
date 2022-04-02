import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendsScalarWhereInput } from './friends-scalar-where.input';
import { FriendsUpdateManyMutationInput } from './friends-update-many-mutation.input';

@InputType()
export class FriendsUpdateManyWithWhereWithoutUsersInput {

    @Field(() => FriendsScalarWhereInput, {nullable:false})
    where!: FriendsScalarWhereInput;

    @Field(() => FriendsUpdateManyMutationInput, {nullable:false})
    data!: FriendsUpdateManyMutationInput;
}
