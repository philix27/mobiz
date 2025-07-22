import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { UserDto, UserGetInfo } from './user.dto';
import { UserService } from './user.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard, VendorGuard } from '../common/guards';

@Resolver((of: any) => UserDto)
export class UserResolver {
    constructor(private readonly service: UserService) {}

    @Query((returns) => UserDto)
    @UseGuards(GqlAuthGuard)
    async user_get(
        @Context() context: { req: { userId: number } },
    ): Promise<UserDto> {
        const recipe = await this.service.getInfo({
            userId: context.req.userId,
        });

        return recipe;
    }

    @Query((returns) => [UserDto])
    @UseGuards(VendorGuard)
    async user_getAll(
        @Context() context: { req: { userId: number } },
    ): Promise<UserDto[]> {
        const recipe = await this.service.getAll({
            userId: context.req.userId,
        });

        return recipe;
    }
}
