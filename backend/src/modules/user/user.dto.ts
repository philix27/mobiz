import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { ID, ObjectType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { $Enums } from '@prisma/client';

registerEnumType($Enums.CountryCode, {
    name: 'Country',
});

@InputType()
export class UserCreate {
    @Field({ nullable: false })
    firstname: string;

    @Field({ nullable: false })
    lastname: string;

    @Field({ nullable: true })
    middlename?: string;

    @Field({ nullable: true })
    email: string;

    @Field((type) => $Enums.CountryCode)
    country: $Enums.CountryCode;

    @Field()
    password: string;
}

@InputType()
export class UserGetInfo {
    @Field({ nullable: false })
    @IsOptional()
    userId?: number;
}

@InputType()
export class UserResetPassword {
    @Field()
    newPassword: string;

    @Field()
    confirmNewPassword: string;

    @Field()
    email?: string;
}

@ObjectType()
export class UserDto {
    @Field((type) => ID)
    id: number;

    @Field({ nullable: true })
    firstname?: string;

    @Field({ nullable: true })
    lastname?: string;

    @Field({ nullable: true })
    middlename?: string;

    @Field({ nullable: true })
    email?: string;

    // @Field({ nullable: true })
    // password?: string;

    @Field({ nullable: true })
    telegram_id?: string;

    @Field({ nullable: true })
    phone?: string;

    @Field({ nullable: true })
    role?: string;

    @Field({ nullable: true })
    nin?: string;

    @Field((type) => $Enums.CredentialsStatus, { nullable: true })
    nin_status?: $Enums.CredentialsStatus;

    @Field({ nullable: true })
    bvn?: string;

    @Field((type) => $Enums.CredentialsStatus, { nullable: true })
    bvn_status?: $Enums.CredentialsStatus;

    @Field({ nullable: true })
    dob?: string;

    @Field((type) => $Enums.CredentialsStatus, { nullable: true })
    dob_status?: $Enums.CredentialsStatus;

    @Field({ nullable: true })
    home_address?: string;

    @Field({ nullable: true })
    state?: string;

    @Field((type) => $Enums.CountryCode, { nullable: true })
    country_code?: $Enums.CountryCode;
}
