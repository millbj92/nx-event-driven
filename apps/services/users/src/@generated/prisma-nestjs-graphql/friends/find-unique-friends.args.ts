import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendsWhereUniqueInput } from './friends-where-unique.input';

@ArgsType()
export class FindUniqueFriendsArgs {

    @Field(() => FriendsWhereUniqueInput, {nullable:false})
    where!: FriendsWhereUniqueInput;
}
