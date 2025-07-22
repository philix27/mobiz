import { Injectable } from '@nestjs/common';
import { LoggerService, PrismaService } from '../common';
import { NotificationService } from '../notification/notification.service';
import {
    Auth_CreateAccountInput,
    Auth_CreateAccountResponse,
    Auth_FirebaseLoginInput,
    Auth_FirebaseLoginResponse,
    Auth_LoginInput,
    Auth_LoginResponse,
    Auth_LogoutInput,
    Auth_sendEmailOtpInput,
    Auth_sendEmailOtpResponse,
    Auth_verifyEmailOtpInput,
    Auth_verifyOtpResponse,
} from './auth.dto';
import { GqlErr } from '../common/errors/gqlErr';
import { HelperService } from '../helper/helper.service';
import { HpFn } from '../../lib';
import { AuthFirebaseService } from './firebase/firebase.service';

@Injectable()
export class AuthService {
    public constructor(
        private readonly logger: LoggerService,
        private readonly notification: NotificationService,
        private readonly prisma: PrismaService,
        private readonly walletCrypto: WalletCryptoService,
        private readonly jwtService: HelperService,
         private readonly fbService : AuthFirebaseService
    ) {}

    public async sendEmailOtp(
        params: Auth_sendEmailOtpInput,
    ): Promise<Auth_sendEmailOtpResponse> {
        this.logger.info('sendEmailOtp');

        if (!HpFn.isValidEmail(params.email))
            throw GqlErr('Invalid email address');

        if (params.purpose === OtpPurpose.SignUp) {
            if (await this.doesEmailExist(params.email))
                throw GqlErr('Account already exist');
        }

        const otp = this.jwtService.generateOTP();
        this.logger.info('sendEmailOtp: ' + otp);

        try {
            const token = this.jwtService.generateToken({ otp });
            await this.notification.sendEmailOtp({ email: params.email, otp });
            // todo: return jwt token with otp
            return {
                message: 'Otp sent successfully',
                token,
            };
        } catch (error) {
            this.logger.error('Could not send otp to email: ' + error.message);
            return {
                message: error.message,
                token: '',
            };
        }
    }

    public async verifyEmailOtp(
        params: Auth_verifyEmailOtpInput,
    ): Promise<Auth_verifyOtpResponse> {
        this.logger.info('VerifyEmailOtp: ');
        const isValid = this.jwtService.verifyOTP(params.token, params.otp);

        if (!isValid) throw GqlErr('Invalid otp');

        return { message: 'Valid otp' };
    }


    public async createAccount(
        params: Auth_CreateAccountInput,
    ): Promise<Auth_CreateAccountResponse> {
        // try {
        this.logger.info('Create user account');

        if (!HpFn.isValidEmail(params.email))
            throw GqlErr('Invalid email address');

        if (!HpFn.isValidPassword(params.password))
            throw GqlErr('Invalid password structure');

        if (await this.doesEmailExist(params.email))
            throw GqlErr('Account already exist');

        const hashedPassword = await this.jwtService.hashPassword(
            params.password,
        );

        const user = await this.prisma.user.create({
            data: {
                firstname: params.firstname,
                lastname: params.lastname,
                middlename: params.middlename,
                email: params.email,
                password: hashedPassword,
                country_code: params.country,
            },
        });

        if (!user) throw GqlErr('User was not found');

        await this.walletCrypto.createWalletsForNewUser({ userId: user.id });

        await this.notification.sendWelcomeMessage({ email: params.email });

        return {
            message: 'Created successfully',
        };
    }

   

    public async login(params: Auth_LoginInput): Promise<Auth_LoginResponse> {
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
            middlename: user.middlename!,
            token,
        };
    }

    public async logout(params: Auth_LogoutInput) {
        // todo:
        this.logger.info('Deleting platform');
    }

    private async doesEmailExist(email: string) {
        const user = await this.prisma.user.findFirst({
            where: {
                email,
            },
        });

        return user ? true : false;
    }

  
    
    public async fbAuth(
        {idToken}: Auth_FirebaseLoginInput,
    ): Promise<Auth_FirebaseLoginResponse>{
        this.logger.info('Login from app ');
        
       
        const payload = await this.fbService.verifyIdToken(
          idToken
        );

        if (!payload) throw GqlErr('You need to login first');


        const email = payload.email;;

        let _user = await this.prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (!_user) {
            console.log('No user found. Creating a new user');
            _user = await this.prisma.user.create({
                data: {
                    email: email,   
                    firstname: payload.name,
                },
            });
        }

        const token = this.jwtService.generateToken({
            userId: _user.id,
            email: _user.email,
            googleId: payload.uid,
        });

        return {
            token: token,
            email: _user.email!,
            firstname: _user.firstname!,
            lastname: _user.lastname!,
            middlename: _user.middlename!,
        };
    }
}
