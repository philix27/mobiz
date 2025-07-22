import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { ID, ObjectType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { $Enums } from '@prisma/client';

registerEnumType($Enums.CountryCode, {
    name: 'Country',
});

@InputType()
export class Employee_CreateInput {
    @Field({ nullable: false })
    email: string;

    @Field({ nullable: false })
    firstName: string;
    
    @Field({ nullable: false })
    lastName: string;

    @Field({ nullable: true })
    group?: string;
}



@ObjectType()
export class Employee_Response {
    @Field({ nullable: false })
    id: string;

    @Field({ nullable: false })
    email: string;
}


@InputType()
export class Employee_GetOneInput {
     @Field({ nullable: false })
    id: string;
}

@InputType()
export class Employee_DeleteInput {
     @Field({ nullable: false })
    id: string;
}

@InputType()
export class Employee_UpdateInput {
     @Field({ nullable: false })
    id: string;

     @Field({ nullable: false })
    title: string;

    @Field({ nullable: false })
    description: string;
}
