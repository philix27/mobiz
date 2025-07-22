import { Injectable } from '@nestjs/common';
import { LoggerService, PrismaService } from '../common';
import { TransactionsService } from '../transactions/transact.service';
import { UserInput } from 'src/lib';
import { Project_CreateInput, Project_DeleteInput, Project_GetOneInput, Project_Response, Project_UpdateInput } from './project.dto';

@Injectable()
export class ProjectService {
    public constructor(
        private readonly logger: LoggerService,
        // private readonly notification: NotificationService,
        private readonly prisma: PrismaService,
        private readonly transaction: TransactionsService,
    ) {}

    public async create(
        p: Project_CreateInput & UserInput,
    ): Promise<Project_Response> {
        this.logger.info('Creating platform account ...');

       throw new Error('Unimplemented');
    }

    public async getAll(
        p:  UserInput,
    ): Promise<Project_Response[]> {
        this.logger.info('Creating platform account ...');

       throw new Error('Unimplemented');
    }
    public async getOne(
        p: Project_GetOneInput & UserInput,
    ): Promise<Project_Response> {
        this.logger.info('Creating platform account ...');

       throw new Error('Unimplemented');
    }
    public async update(
        p: Project_UpdateInput & UserInput,
    ): Promise<Project_Response> {
        this.logger.info('Creating platform account ...');

       throw new Error('Unimplemented');
    }

    
    public async delete(
        p: Project_DeleteInput & UserInput,
    ): Promise<Project_Response> {
        this.logger.info('Creating platform account ...');

       throw new Error('Unimplemented');
    }
   
}
