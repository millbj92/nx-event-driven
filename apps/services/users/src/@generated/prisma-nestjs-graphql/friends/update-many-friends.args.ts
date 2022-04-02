import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendsUpdateManyMutationInput } from './friends-update-many-mutation.input';
import { FriendsWhereInput } from './friends-where.input';

@ArgsType()
export class UpdateManyFriendsArgs {

    @Field(() => FriendsUpdateManyMutationInput, {nullable:false})
    data!: FriendsUpdateManyMutationInput;

    @Field(() => FriendsWhereInput, {nullable:true})
    where?: FriendsWhereInput;
}
