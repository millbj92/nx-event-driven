import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendsCreateInput } from './friends-create.input';

@ArgsType()
export class CreateOneFriendsArgs {

    @Field(() => FriendsCreateInput, {nullable:false})
    data!: FriendsCreateInput;
}
