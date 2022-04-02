import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FriendsCreateManyUsersInput } from './friends-create-many-users.input';

@InputType()
export class FriendsCreateManyUsersInputEnvelope {

    @Field(() => [FriendsCreateManyUsersInput], {nullable:false})
    data!: Array<FriendsCreateManyUsersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
