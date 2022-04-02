import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendsWhereUniqueInput } from './friends-where-unique.input';
import { FriendsCreateInput } from './friends-create.input';
import { FriendsUpdateInput } from './friends-update.input';

@ArgsType()
export class UpsertOneFriendsArgs {

    @Field(() => FriendsWhereUniqueInput, {nullable:false})
    where!: FriendsWhereUniqueInput;

    @Field(() => FriendsCreateInput, {nullable:false})
    create!: FriendsCreateInput;

    @Field(() => FriendsUpdateInput, {nullable:false})
    update!: FriendsUpdateInput;
}
