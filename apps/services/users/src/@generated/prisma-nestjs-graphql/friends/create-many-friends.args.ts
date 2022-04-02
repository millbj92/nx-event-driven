import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FriendsCreateManyInput } from './friends-create-many.input';

@ArgsType()
export class CreateManyFriendsArgs {

    @Field(() => [FriendsCreateManyInput], {nullable:false})
    data!: Array<FriendsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
