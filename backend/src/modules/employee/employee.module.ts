import { Module } from "@nestjs/common";
import { CommonModule } from "../common";
import { EmployeeResolver } from "./employee.resolver";


@Module({
    imports: [CommonModule],
    providers: [EmployeeResolver],
    exports: [],
})
export class EmployeeModule {}
