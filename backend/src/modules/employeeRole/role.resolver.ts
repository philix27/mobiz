import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EmployeeRole_CreateInput, EmployeeRole_DeleteInput, EmployeeRole_GetOneInput, EmployeeRole_Response, EmployeeRole_UpdateInput,  } from './role.dto';
import { EmployeeRoleService } from './role.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../common/guards';
import { UserInput } from 'src/lib';

@Resolver((of: any) => EmployeeRole_Response)
export class EmployeeRoleResolver {
    constructor(private readonly service: EmployeeRoleService) {}

    @Query((returns) => [EmployeeRole_Response])
    @UseGuards(GqlAuthGuard)
    async employeeRole_getAll(
        @Context() context: { req: UserInput },
    ): Promise<EmployeeRole_Response[]> {
        const data = await this.service.getAll({
            userId: context.req.userId,
        });

        return data;
    }

    @Query((returns) => EmployeeRole_Response)
    @UseGuards(GqlAuthGuard)
    async employeeRole_getOne(
        @Context() context: { req: UserInput },
         @Args('input') input: EmployeeRole_GetOneInput,
    ): Promise<EmployeeRole_Response> {
        const data = await this.service.getOne({
             ...input,
            userId: context.req.userId,
        });

        return data;
    }

    @Mutation((returns) => EmployeeRole_Response)
    @UseGuards(GqlAuthGuard)
    async employeeRole_create(
        @Context() context: { req: UserInput },
         @Args('input') input: EmployeeRole_CreateInput,
    ): Promise<EmployeeRole_Response> {
        const data = await this.service.create({
             ...input,
            userId: context.req.userId,
        });

        return data;
    }

    @Mutation((returns) => EmployeeRole_Response)
    @UseGuards(GqlAuthGuard)
    async employeeRole_delete(
        @Context() context: { req: UserInput },
         @Args('input') input: EmployeeRole_DeleteInput ,
    ): Promise<EmployeeRole_Response> {
        const data = await this.service.delete({
             ...input,
            userId: context.req.userId,
        });

        return data;
    }

    @Mutation((returns) => EmployeeRole_Response)
    @UseGuards(GqlAuthGuard)
    async employeeRole_update(
        @Context() context: { req: UserInput },
         @Args('input') input: EmployeeRole_UpdateInput ,
    ): Promise<EmployeeRole_Response> {
        const data = await this.service.update({
             ...input,
            userId: context.req.userId,
        });

        return data;
    }


}
