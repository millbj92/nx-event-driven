import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendsUpdateInput } from './friends-update.input';
import { FriendsWhereUniqueInput } from './friends-where-unique.input';

@ArgsType()
export class UpdateOneFriendsArgs {

    @Field(() => FriendsUpdateInput, {nullable:false})
    data!: FriendsUpdateInput;

    @Field(() => FriendsWhereUniqueInput, {nullable:false})
    where!: FriendsWhereUniqueInput;
}
