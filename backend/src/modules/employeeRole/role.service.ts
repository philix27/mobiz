import { Injectable } from '@nestjs/common';
import { LoggerService, PrismaService } from '../common';
import { UserInput } from 'src/lib';
import { EmployeeRole_CreateInput, EmployeeRole_DeleteInput, EmployeeRole_GetOneInput, EmployeeRole_Response, EmployeeRole_UpdateInput, } from './role.dto';

@Injectable()
export class EmployeeRoleService {
    public constructor(
        private readonly logger: LoggerService,
        private readonly prisma: PrismaService,
    ) {}
group = "Employee ->";

    public async create(
        p: EmployeeRole_CreateInput & UserInput,
    ): Promise<EmployeeRole_Response> {
        this.logger.info(this.group + this.create.name);

       throw new Error('Unimplemented');
    }

    public async getAll(
        p:  UserInput,
    ): Promise<EmployeeRole_Response[]> {
  this.logger.info(this.group + this.getAll.name);

       throw new Error('Unimplemented');
    }
    
    public async getOne(
        p: EmployeeRole_GetOneInput & UserInput,
    ): Promise<EmployeeRole_Response> {
          this.logger.info(this.group + this.getOne.name);

       throw new Error('Unimplemented');
    }

    public async update(
        p: EmployeeRole_UpdateInput & UserInput,
    ): Promise<EmployeeRole_Response> {  this.logger.info(this.group + this.update.name);

       throw new Error('Unimplemented');
    }

    
    public async delete(
        p: EmployeeRole_DeleteInput & UserInput,
    ): Promise<EmployeeRole_Response> {
         this.logger.info(this.group + this.delete.name);

       throw new Error('Unimplemented');
    }
   
}
