import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Address } from '../address/address.model';

@ObjectType()
export class Claims {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => String, {nullable:false})
    sub!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    given_name!: string | null;

    @Field(() => String, {nullable:true})
    family_name!: string | null;

    @Field(() => String, {nullable:true})
    middle_name!: string | null;

    @Field(() => String, {nullable:true})
    nickname!: string | null;

    @Field(() => String, {nullable:true})
    preferred_username!: string | null;

    @Field(() => String, {nullable:true})
    profile!: string | null;

    @Field(() => String, {nullable:false,defaultValue:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'})
    picture!: string;

    @Field(() => String, {nullable:true})
    website!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    email_verified!: string | null;

    @Field(() => String, {nullable:true})
    gender!: string | null;

    @Field(() => Date, {nullable:true})
    birthdate!: Date | null;

    @Field(() => String, {nullable:true})
    zoneInfo!: string | null;

    @Field(() => String, {nullable:true})
    locale!: string | null;

    @Field(() => String, {nullable:true})
    phone_number!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    phone_number_verified!: boolean;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Address, {nullable:true})
    address?: Address | null;
}
