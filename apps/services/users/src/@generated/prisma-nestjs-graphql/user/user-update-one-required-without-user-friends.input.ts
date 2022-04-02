import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserFriendsInput } from './user-create-without-user-friends.input';
import { UserCreateOrConnectWithoutUserFriendsInput } from './user-create-or-connect-without-user-friends.input';
import { UserUpsertWithoutUserFriendsInput } from './user-upsert-without-user-friends.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutUserFriendsInput } from './user-update-without-user-friends.input';

@InputType()
export class UserUpdateOneRequiredWithoutUserFriendsInput {

    @Field(() => UserCreateWithoutUserFriendsInput, {nullable:true})
    create?: UserCreateWithoutUserFriendsInput;

    @Field(() => UserCreateOrConnectWithoutUserFriendsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutUserFriendsInput;

    @Field(() => UserUpsertWithoutUserFriendsInput, {nullable:true})
    upsert?: UserUpsertWithoutUserFriendsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutUserFriendsInput, {nullable:true})
    update?: UserUpdateWithoutUserFriendsInput;
}
