import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendsWhereInput } from './friends-where.input';

@ArgsType()
export class DeleteManyFriendsArgs {

    @Field(() => FriendsWhereInput, {nullable:true})
    where?: FriendsWhereInput;
}
