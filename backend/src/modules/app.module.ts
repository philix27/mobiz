import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ScheduleModule } from '@nestjs/schedule';
import { JwtModule } from '@nestjs/jwt';
import { CommonModule } from './common';
// import { PubSubModule } from "./pubsub/pubsub.module";
import { NotificationModule } from './notification/notification.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BankAccountModule } from './bankAccount/bankAccount.module';
import { PassportModule } from '@nestjs/passport';
import jwtConfig from './auth/jwt.config';
import { CronModule } from './cron/cron.module';
import { KycModule } from "./kyc/kyc.module";
import { ExchangeRateModule } from './rates/rates.module';
import { TransactionsModule } from './transactions/transact.module';
import { HelpersModule } from './helper/helper.module';
import { ProjectsModule } from './projects/project.module';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeRoleModule } from './employeeRole/role.module';

@Module({
    imports: [
        ScheduleModule.forRoot(),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            playground: true,
            autoSchemaFile: true,
            sortSchema: true,
            introspection: true,
            subscriptions: {
                'graphql-ws': true,
            },
        }),
        PassportModule,
        JwtModule.registerAsync(jwtConfig.asProvider()),
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '72h', algorithm: 'RS256', keyid: '' },
            privateKey: '',
        }),
        CommonModule,
        HelpersModule,
        NotificationModule,
        AuthModule,
        UserModule,
        BankAccountModule,
        CronModule,
        KycModule,
        ExchangeRateModule,
        TransactionsModule,
        EmployeeModule,
        EmployeeRoleModule,
        ProjectsModule
        // PubSubModule,
    ],
})
export class ApplicationModule {}
