import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Employee_CreateInput, Employee_DeleteInput, Employee_GetOneInput, Employee_Response, Employee_UpdateInput,  } from './employee.dto';
import { EmployeeService } from './employee.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../common/guards';
import { UserInput } from 'src/lib';

@Resolver((of: any) => Employee_Response)
export class EmployeeResolver {
    constructor(private readonly service: EmployeeService) {}

    @Query((returns) => [Employee_Response])
    @UseGuards(GqlAuthGuard)
    async employee_getAll(
        @Context() context: { req: UserInput },
    ): Promise<Employee_Response[]> {
        const data = await this.service.getAll({
            userId: context.req.userId,
        });

        return data;
    }

    @Query((returns) => Employee_Response)
    @UseGuards(GqlAuthGuard)
    async employee_getOne(
        @Context() context: { req: UserInput },
         @Args('input') input: Employee_GetOneInput,
    ): Promise<Employee_Response> {
        const data = await this.service.getOne({
             ...input,
            userId: context.req.userId,
        });

        return data;
    }

    @Mutation((returns) => Employee_Response)
    @UseGuards(GqlAuthGuard)
    async employee_create(
        @Context() context: { req: UserInput },
         @Args('input') input: Employee_CreateInput,
    ): Promise<Employee_Response> {
        const data = await this.service.create({
             ...input,
            userId: context.req.userId,
        });

        return data;
    }

    @Mutation((returns) => Employee_Response)
    @UseGuards(GqlAuthGuard)
    async employee_delete(
        @Context() context: { req: UserInput },
         @Args('input') input: Employee_DeleteInput ,
    ): Promise<Employee_Response> {
        const data = await this.service.delete({
             ...input,
            userId: context.req.userId,
        });

        return data;
    }

    @Mutation((returns) => Employee_Response)
    @UseGuards(GqlAuthGuard)
    async employee_update(
        @Context() context: { req: UserInput },
         @Args('input') input: Employee_UpdateInput ,
    ): Promise<Employee_Response> {
        const data = await this.service.update({
             ...input,
            userId: context.req.userId,
        });

        return data;
    }


}
