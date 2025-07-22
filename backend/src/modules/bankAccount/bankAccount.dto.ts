import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class BankAccount_CreateInput {
    @Field({ nullable: false })
    accountName: string;

    @Field({ nullable: false })
    accountNo: string;

    @Field({ nullable: false })
    bankName: string;

    @Field({ nullable: true })
    bankCode?: string;
}
@ObjectType()
export class BankAccount_Response {
    @Field({ nullable: false })
    id: number;

    @Field({ nullable: false })
    account_name: string;

    @Field({ nullable: false })
    account_no: string;

    @Field({ nullable: false })
    bank_name: string;

    @Field({ nullable: true })
    bankCode?: string;
}

@InputType()
export class BankAccount_DeleteInput {
    @Field()
    accountId: number;
}
@ObjectType()
export class BankAccount_DeleteResponse {
    @Field()
    message: string;
}

@ObjectType()
export class BankList_Response {
    @Field({ nullable: false })
    bankName: string;

    @Field({ nullable: true })
    bankCode?: string;
}

@ObjectType()
export class BankGetAccountName_Response {
    @Field({ nullable: false })
    account_name: string;

    @Field({ nullable: false })
    account_number: string;

    // @Field({ nullable: false })
    // bank_code: string;
    // @Field({ nullable: false })
    // Bank_name: string;
    // @Field({ nullable: false })
    // status: string;
    // @Field({ nullable: false })
    // execution_time: string;
}

@InputType()
export class BankGetAccountName_Input {
    @Field()
    accountNo: string;

    @Field({ nullable: true })
    bankCode: string;
}
