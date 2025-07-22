import { Injectable } from '@nestjs/common';
import { LoggerService, PrismaService } from '../common';
import { TransactionsService } from '../transactions/transact.service';
import { UserInput } from 'src/lib';
import { Employee_CreateInput, Employee_DeleteInput, Employee_GetOneInput, Employee_Response, Employee_UpdateInput, } from './employee.dto';

@Injectable()
export class EmployeeService {
    public constructor(
        private readonly logger: LoggerService,
        private readonly prisma: PrismaService,
        private readonly transaction: TransactionsService,
    ) {}
group = "Employee ->";

    public async create(
        p: Employee_CreateInput & UserInput,
    ): Promise<Employee_Response> {
        this.logger.info(this.group + this.create.name);

       throw new Error('Unimplemented');
    }

    public async getAll(
        p:  UserInput,
    ): Promise<Employee_Response[]> {
  this.logger.info(this.group + this.getAll.name);

       throw new Error('Unimplemented');
    }
    
    public async getOne(
        p: Employee_GetOneInput & UserInput,
    ): Promise<Employee_Response> {
          this.logger.info(this.group + this.getOne.name);

       throw new Error('Unimplemented');
    }

    public async update(
        p: Employee_UpdateInput & UserInput,
    ): Promise<Employee_Response> {  this.logger.info(this.group + this.update.name);

       throw new Error('Unimplemented');
    }

    
    public async delete(
        p: Employee_DeleteInput & UserInput,
    ): Promise<Employee_Response> {
         this.logger.info(this.group + this.delete.name);

       throw new Error('Unimplemented');
    }
   
}
