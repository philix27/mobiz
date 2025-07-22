import { Module } from "@nestjs/common";
import { CommonModule } from "../common";
import { ProjectsService } from "./project.service";
import { ProjectsResolver } from "./project.resolver";


@Module({
    imports: [CommonModule],
    providers: [ProjectsService, ProjectsResolver],
    exports: [],
})
export class ProjectsModule {}
