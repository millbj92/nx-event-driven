import { AggregateRoot } from "@nestjs/cqrs";
import { User } from "@prisma/client/users";
import { UserLoggedInEvent, UserRegisteeredEvent, VerificationResentEvent } from "../cqrs/events";

export type UserForSignin = Partial<User> & Pick<User, "email" | "password">;
export type IUserForLogin = UserForSignin;
export class UserForLogin extends AggregateRoot implements IUserForLogin  {
    constructor(
        public readonly id: string,
        public readonly email: Lowercase<string>,
        public readonly password: string
    ) {
        super();
    }

    public login() {
        this.apply(new UserLoggedInEvent(this));
    }
}

export class ResendVerificationUser extends AggregateRoot {
    constructor(
        public readonly email: Lowercase<string>,
        public readonly token: string
    ) {
        super();
    }

    public resendVerification() {
        this.apply(new VerificationResentEvent(this.email, this.token));
    }
}



export type UserForRegistration = Partial<User> & Pick<User, 'email' | 'password' | 'firstName' | 'lastName'>;

export type IUserForRegister = UserForRegistration

export class UserForRegister extends AggregateRoot implements IUserForRegister  {
    constructor(
        public readonly email: Lowercase<string>,
        public readonly password: string,
        public readonly firstName: string,
        public readonly lastName: string,
    ) {
        super();
    }

    public register() {
        this.apply(new UserRegisteeredEvent(this))
    }
}


export type ScopeTypes = "openid" | "profile" | "email" | "address" | "phone" | "offline_access";

interface IAddress extends IClaim {
    formatted: string;
    street_address: {
        house_number: string;
        street_name: string;
        po_box: string;
        [key: string]: string;
    } | {[key: string]: string};
    locality: string;
    region: string;
    postal_code: string;
    country: string;
};
interface IClaim {
    scope: ScopeTypes;
}
export interface IProfile extends IClaim {
    name: string;
    given_name: string;
    family_name: string;
    middle_name: string;
    nickname: string;
    preferred_username: string;
    profile: string;
    picture: string;
    website: string;
    email: string;
    email_verified: boolean;
    gender: string;
    birthdate: string;
    zoneinfo: string;
    locale: string;
    phone_number: string;
    phone_number_verified: boolean;
    address: Partial<IAddress>;
    updated_at: string;
}

export type Profile = IProfile;
export type Address = IAddress;


export interface VerificationToken {
    token: string;
}

export type GrantType =  "Implicit" | "AuthorizationCode" | "Hybrid" | "ClientCredentials" | "ResourceOwnerPassword" | "DeviceFlow" | "RefreshToken" | "Extension";

export interface TokenRequest {
  grant_type: GrantType;
  client_id: string;
  client_secret: string;
  username: string;
  password: string;
  scope: string;
}


export interface ITenant {
    id: string;
    clientSecret: string;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}

export type ResponseType = "code" | "token" | "id_token" | "code token" | "code id_token" | "id_token token" | "code id_token token" | "none";
export type RequestScope = "openid" | "profile" | "email" | "address" | "phone" | "offline_access";
export type TenantForSignUp = Partial<ITenant> & Pick<ITenant, "name">;
