import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { ID, ObjectType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { $Enums } from '@prisma/client';

registerEnumType($Enums.CountryCode, {
    name: 'Country',
});

@InputType()
export class Project_CreateInput {
    @Field({ nullable: false })
    title: string;

    @Field({ nullable: true })
    description: string;
}



@ObjectType()
export class Project_Response {
    @Field({ nullable: false })
    id: string;

    @Field({ nullable: false })
    title: string;

    @Field({ nullable: false })
    description: string;
}


@InputType()
export class Project_GetOneInput {
     @Field({ nullable: false })
    id: string;
}
@InputType()
export class Project_DeleteInput {
     @Field({ nullable: false })
    id: string;
}
@InputType()
export class Project_UpdateInput {
     @Field({ nullable: false })
    id: string;

     @Field({ nullable: false })
    title: string;

    @Field({ nullable: false })
    description: string;
}
