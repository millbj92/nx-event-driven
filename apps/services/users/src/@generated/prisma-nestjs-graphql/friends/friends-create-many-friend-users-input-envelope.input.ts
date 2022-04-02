import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendsCreateManyFriendUsersInput } from './friends-create-many-friend-users.input';

@InputType()
export class FriendsCreateManyFriendUsersInputEnvelope {

    @Field(() => [FriendsCreateManyFriendUsersInput], {nullable:false})
    data!: Array<FriendsCreateManyFriendUsersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
