import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendsUserIdFriendUserIdCompoundUniqueInput } from './friends-user-id-friend-user-id-compound-unique.input';

@InputType()
export class FriendsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => FriendsUserIdFriendUserIdCompoundUniqueInput, {nullable:true})
    userId_friendUserId?: FriendsUserIdFriendUserIdCompoundUniqueInput;
}
