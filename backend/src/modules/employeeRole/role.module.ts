import { Module } from "@nestjs/common";
import { CommonModule } from "../common";
import { EmployeeRoleResolver } from "./role.resolver";
import { EmployeeRoleService } from "./role.service";


@Module({
    imports: [CommonModule],
    providers: [EmployeeRoleResolver, EmployeeRoleService],
    exports: [],
})
export class EmployeeRoleModule {}
