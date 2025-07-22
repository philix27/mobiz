import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { $Enums } from '@prisma/client';
import { OtpPurpose } from '../common/enums';

@InputType()
export class Auth_CreateAccountInput {
    @Field({ nullable: false })
    email: string;

    @Field({ nullable: false })
    firstname: string;

    @Field({ nullable: false })
    lastname: string;

    @Field({ nullable: true })
    middlename: string;

    @Field((type) => $Enums.CountryCode)
    country: $Enums.CountryCode;

    @Field({ nullable: false })
    password: string;
}

@ObjectType()
export class Auth_CreateAccountResponse {
    @Field()
    message: string;
}

@InputType()
export class Auth_sendEmailOtpInput {
    @Field()
    email: string;

    @Field((type) => OtpPurpose)
    purpose: OtpPurpose;
}
@ObjectType()
export class Auth_sendEmailOtpResponse {
    @Field()
    message: string;

    @Field()
    token: string;
}

@InputType()
export class Auth_verifyEmailOtpInput {
    @Field()
    email: string;

    @Field()
    token: string;

    @Field()
    otp: string;
}

@ObjectType()
export class Auth_verifyOtpResponse {
    @Field()
    message: string;
}

@InputType()
export class Auth_ResetPasswordInput {
    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    confirmPassword: string;
}

@ObjectType()
export class Auth_ResetPasswordResponse {
    @Field()
    message: string;
}

@InputType()
export class Auth_LoginInput {
    @Field()
    email: string;

    @Field()
    password: string;
}

@InputType()
export class Auth_LoginMinipayInput {
    @Field()
    walletAddress: string;
}


@InputType()
export class Auth_ThirdwebLoginInput {
    @Field()
    walletAddress: string;

    @Field()
    email: string;

    @Field()
    payload: string;
}
@InputType()
export class Auth_FirebaseLoginInput {
    @Field()
    idToken: string;
}

@InputType()
export class Auth_MinipayCreateAccountInput {
    @Field()
    walletAddress: string;

    @Field()
    email: string;
}
@InputType()
export class Auth_TelegramLoginInput {
    @Field()
    walletAddress?: string;

    @Field()
    telegramUserId: string;
}

@ObjectType()
export class Auth_TelegramLoginResponse {
    @Field({ nullable: true })
    email?: string;

    @Field({ nullable: true })
    firstname?: string;

    @Field({ nullable: true })
    lastname?: string;

    @Field({ nullable: true })
    middlename?: string;

    @Field({ nullable: true })
    token: string;

    @Field()
    walletAddress?: string;
}
@ObjectType()
export class Auth_LoginMinipayResponse {
    @Field({ nullable: true })
    email?: string;

    @Field({ nullable: true })
    firstname?: string;

    @Field({ nullable: true })
    lastname?: string;

    @Field({ nullable: true })
    middlename?: string;

    @Field({ nullable: true })
    token: string;

    @Field()
    walletAddress: string;
}
@ObjectType()
export class Auth_FirebaseLoginResponse {
    @Field({ nullable: true })
    email?: string;

    @Field({ nullable: true })
    firstname?: string;

    @Field({ nullable: true })
    lastname?: string;

    @Field({ nullable: true })
    middlename?: string;

    @Field({ nullable: true })
    token: string;

    @Field({ nullable: true })
    walletAddress?: string;
}

@ObjectType()
export class Auth_LoginResponse {
    @Field({ nullable: false })
    email: string;

    @Field({ nullable: false })
    firstname: string;

    @Field({ nullable: false })
    lastname: string;

    @Field({ nullable: true })
    middlename?: string;

    @Field({ nullable: false })
    token: string;

    @Field((type) => $Enums.CountryCode)
    country: $Enums.CountryCode;
}

@InputType()
export class Auth_LogoutInput {
    @Field({ nullable: false })
    email: string;
}
