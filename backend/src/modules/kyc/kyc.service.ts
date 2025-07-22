import { Injectable } from '@nestjs/common';
import {
    Kyc_AddAddressInfoInput,
    Kyc_AddAddressProofInput,
    Kyc_AddBvnInput,
    Kyc_AddBvnResponse,
    Kyc_AddDobInput,
    Kyc_AddNamesInput,
    Kyc_AddNinInput,
    Kyc_AddNinResponse,
    Kyc_CreateTransactionPinInput,
    Kyc_Response,
    Kyc_SendPhoneOtpInput,
    Kyc_VerifyPhoneOtpInput,
} from './kyc.dto';
import { UserInput } from '../../lib';
import { GqlErr } from '../common/errors/gqlErr';
import { LoggerService, PrismaService } from '../common';
import { HelperService } from '../helper/helper.service';

@Injectable()
export class KycService {
    public constructor(
        private readonly logger: LoggerService,
        private readonly prisma: PrismaService,
        private readonly jwtService: HelperService,
    ) {} // private readonly notification: NotificationService // private readonly logger: LoggerService

    public async sendPhoneOtp(params: Kyc_SendPhoneOtpInput & UserInput) {
        // this.logger.info("Creating platform account ...");
        throw GqlErr('Unimplemented');
    }

    public async verifyPhoneOtp(params: Kyc_VerifyPhoneOtpInput & UserInput) {
        throw GqlErr('Unimplemented');
    }

    public async createTransactionPin(
        params: Kyc_CreateTransactionPinInput & UserInput,
    ) {
        this.logger.info('KYC - Create transactions pin');
        const hashedPin = await this.jwtService.hashPassword(params.pin);

        const res = await this.prisma.user.update({
            where: {
                id: params.userId,
            },
            data: {
                transaction_pin: hashedPin,
            },
        });

        return {
            message: 'Transactions Pin set',
        };
    }

    public async addBvn(
        params: Kyc_AddBvnInput & UserInput,
    ): Promise<Kyc_AddBvnResponse> {
        this.logger.info('KYC - Add BVN number');
        const res = await this.prisma.user.update({
            where: {
                id: params.userId,
            },
            data: {
                bvn: params.bvn,
                bvn_status: 'REVIEW',
            },
        });
        return {
            message: 'BVN verification request sent',
        };
    }

    public async addNin(
        params: Kyc_AddNinInput & UserInput,
    ): Promise<Kyc_AddNinResponse> {
        this.logger.info('KYC - Add NIN number');
        const res = await this.prisma.user.update({
            where: {
                id: params.userId,
            },
            data: {
                nin: params.nin,
                nin_status: 'REVIEW',
            },
        });

        return {
            message: 'NIN verification request sent',
        };
    }

    public async addNames(
        params: Kyc_AddNamesInput & UserInput,
    ): Promise<Kyc_Response> {
        this.logger.info('KYC - Add names');

        await this.prisma.user.update({
            where: {
                id: params.userId,
            },
            data: {
                firstname: params.firstName,
                lastname: params.lastName,
                middlename: params.middleName,
            },
        });

        return {
            message: 'Update user names',
        };
    }

    public async addDob(
        params: Kyc_AddDobInput & UserInput,
    ): Promise<Kyc_Response> {
        this.logger.info('KYC - Add Date of Birth');
        await this.prisma.user.update({
            where: {
                id: params.userId,
            },
            data: {
                dob: params.dob,
                dob_status: 'REVIEW',
            },
        });

        return {
            message: 'Date of Birth added',
        };
    }

    public async addAddressInfo(
        params: Kyc_AddAddressInfoInput & UserInput,
    ): Promise<Kyc_Response> {
        this.logger.info('KYC - Add address info');
        await this.prisma.user.update({
            where: {
                id: params.userId,
            },
            data: {
                street_address: params.street,
                state: params.state,
                country_code: params.country,
                home_address: params.houseAddress,
            },
        });

        return {
            message: 'Address updated',
        };
    }

    public async addAddressProof(
        params: Kyc_AddAddressProofInput & UserInput,
    ): Promise<Kyc_Response> {
        this.logger.info('KYC - Proof of address');
        await this.prisma.user.update({
            where: {
                id: params.userId,
            },
            data: {
                proof_of_address: params.proofOfAddressUrl,
            },
        });

        return {
            message: 'Address updated',
        };
    }
}
