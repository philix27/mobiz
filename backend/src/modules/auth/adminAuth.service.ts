import { Injectable } from '@nestjs/common';
import { LoggerService, PrismaService } from '../common';
import {
    Auth_CreateAccountInput,
    Auth_CreateAccountResponse,
    Auth_LoginInput,
    Auth_LoginResponse,
    Auth_LogoutInput,
} from './auth.dto';
import { GqlErr } from '../common/errors/gqlErr';
import { HelperService } from '../helper/helper.service';
import { HpFn } from '../../lib';
import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { $Enums } from '@prisma/client';

@InputType()
export class Admin_CreateAccountInput {
    @Field({ nullable: false })
    email: string;

    @Field({ nullable: false })
    firstname: string;

    @Field({ nullable: false })
    lastname: string;

    @Field((type) => $Enums.CountryCode)
    country: $Enums.CountryCode;

    @Field({ nullable: false })
    role: string;

    @Field({ nullable: false })
    password: string;
}

@ObjectType()
export class Admin_CreateAccountResponse {
    @Field()
    message: string;
}

@InputType()
export class Admin_LoginInput {
    @Field({ nullable: false })
    email: string;

    @Field({ nullable: false })
    password: string;
}

@Injectable()
export class AdminAuthService {
    public constructor(
        private readonly logger: LoggerService,
        private readonly prisma: PrismaService,
        private readonly jwtService: HelperService,
    ) {}

    public async createAccount(
        params: Admin_CreateAccountInput,
    ): Promise<Admin_CreateAccountResponse> {
        // try {
        this.logger.info('Create user account');

        if (!HpFn.isValidEmail(params.email))
            throw GqlErr('Invalid email address');

        if (!HpFn.isValidPassword(params.password))
            throw GqlErr('Invalid password structure');

        const hashedPassword = await this.jwtService.hashPassword(
            params.password,
        );

        const user = await this.prisma.user.create({
            data: {
                firstname: params.firstname,
                lastname: params.lastname,
                email: params.email,
                password: hashedPassword,
                country_code: params.country,
            },
        });

        if (!user) throw GqlErr('User was not found');

        return {
            message: 'Created successfully',
        };
    }

    public async login(params: Admin_LoginInput): Promise<Auth_LoginResponse> {
        this.logger.info('Fetch user info');
        const user = await this.prisma.user.findFirst({
            where: {
                email: params.email,
            },
        });

        if (!user) {
            this.logger.error('Invalid credentials');
            throw GqlErr('Invalid credentials');
        }
        if (!user.password) {
            this.logger.error('No password for this account');
            throw GqlErr('No password for this account');
        }

        const isValid = await this.jwtService.verifyPassword(
            params.password,
            user?.password!,
        );

        if (!isValid) {
            this.logger.error("user password doesn't match");
            throw GqlErr('Invalid credentials');
        }

        const token = this.jwtService.generateToken({
            userId: user.id,
            email: user.email,
        });

        return {
            country: user.country_code!,
            email: user.email!,
            firstname: user.firstname!,
            lastname: user.lastname!,
            token,
        };
    }

    public async logout(params: Auth_LogoutInput) {
        // todo:
        this.logger.info('Deleting platform');
    }
}
