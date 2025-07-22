import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';

import { KycService } from './kyc.service';
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
} from './kyc.dto';
import { UserDto } from '../user/user.dto';
import { IContextUser } from '../../lib';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../common/guards';

@Resolver((of: any) => UserDto)
export class KycResolver {
    constructor(private readonly service: KycService) {}

    @Mutation((returns) => Kyc_AddBvnResponse)
    @UseGuards(GqlAuthGuard)
    async kyc_addBvn(
        @Context() context: IContextUser,
        @Args('input') input: Kyc_AddBvnInput,
    ): Promise<Kyc_AddBvnResponse> {
        const res = await this.service.addBvn({
            ...input,
            userId: context.req.userId,
        });

        return res!;
    }

    @Mutation((returns) => Kyc_AddNinResponse)
    @UseGuards(GqlAuthGuard)
    async kyc_addNin(
        @Context() context: IContextUser,
        @Args('input') input: Kyc_AddNinInput,
    ): Promise<Kyc_AddNinResponse> {
        const res = await this.service.addNin({
            ...input,
            userId: context.req.userId,
        });

        return res!;
    }

    @Mutation((returns) => Kyc_Response)
    @UseGuards(GqlAuthGuard)
    async kyc_addNames(
        @Context() context: IContextUser,
        @Args('input') input: Kyc_AddNamesInput,
    ): Promise<Kyc_Response> {
        const res = await this.service.addNames({
            ...input,
            userId: context.req.userId,
        });

        return res!;
    }

    @Mutation((returns) => Kyc_Response)
    @UseGuards(GqlAuthGuard)
    async kyc_addDob(
        @Context() context: IContextUser,
        @Args('input') input: Kyc_AddDobInput,
    ): Promise<Kyc_Response> {
        const res = await this.service.addDob({
            ...input,
            userId: context.req.userId,
        });

        return res!;
    }

    @Mutation((returns) => Kyc_Response)
    @UseGuards(GqlAuthGuard)
    async kyc_addAddressInfo(
        @Context() context: IContextUser,
        @Args('input') input: Kyc_AddAddressInfoInput,
    ): Promise<Kyc_Response> {
        const res = await this.service.addAddressInfo({
            ...input,
            userId: context.req.userId,
        });

        return res!;
    }

    @Mutation((returns) => Kyc_Response)
    @UseGuards(GqlAuthGuard)
    async kyc_addAddressProof(
        @Context() context: IContextUser,
        @Args('input') input: Kyc_AddAddressProofInput,
    ): Promise<Kyc_Response> {
        const res = await this.service.addAddressProof({
            ...input,
            userId: context.req.userId,
        });

        return res!;
    }

    @Mutation((returns) => Kyc_Response)
    @UseGuards(GqlAuthGuard)
    async kyc_createTransactionPin(
        @Context() context: IContextUser,
        @Args('input') input: Kyc_CreateTransactionPinInput,
    ): Promise<Kyc_Response> {
        const res = await this.service.createTransactionPin({
            ...input,
            userId: context.req.userId,
        });

        return res!;
    }
}
