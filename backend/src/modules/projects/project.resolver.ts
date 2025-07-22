import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Project_CreateInput, Project_DeleteInput, Project_GetOneInput, Project_Response, Project_UpdateInput,  } from './project.dto';
import { ProjectService } from './project.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../common/guards';
import { UserInput } from 'src/lib';

@Resolver((of: any) => Project_Response)
export class ProjectsResolver {
    constructor(private readonly service: ProjectService) {}

    @Query((returns) => [Project_Response])
    @UseGuards(GqlAuthGuard)
    async project_getAll(
        @Context() context: { req: UserInput },
    ): Promise<Project_Response[]> {
        const data = await this.service.getAll({
            userId: context.req.userId,
        });

        return data;
    }

    @Query((returns) => Project_Response)
    @UseGuards(GqlAuthGuard)
    async project_getOne(
        @Context() context: { req: UserInput },
         @Args('input') input: Project_GetOneInput,
    ): Promise<Project_Response> {
        const data = await this.service.getOne({
             ...input,
            userId: context.req.userId,
        });

        return data;
    }

    @Mutation((returns) => Project_Response)
    @UseGuards(GqlAuthGuard)
    async project_create(
        @Context() context: { req: UserInput },
         @Args('input') input: Project_CreateInput,
    ): Promise<Project_Response> {
        const data = await this.service.create({
             ...input,
            userId: context.req.userId,
        });

        return data;
    }

    @Mutation((returns) => Project_Response)
    @UseGuards(GqlAuthGuard)
    async project_delete(
        @Context() context: { req: UserInput },
         @Args('input') input: Project_DeleteInput ,
    ): Promise<Project_Response> {
        const data = await this.service.delete({
             ...input,
            userId: context.req.userId,
        });

        return data;
    }

    @Mutation((returns) => Project_Response)
    @UseGuards(GqlAuthGuard)
    async project_update(
        @Context() context: { req: UserInput },
         @Args('input') input: Project_UpdateInput ,
    ): Promise<Project_Response> {
        const data = await this.service.update({
             ...input,
            userId: context.req.userId,
        });

        return data;
    }


}
