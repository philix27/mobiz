import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ExchangeRate_Response {
    @Field((type) => Float)
    USD: number;

    @Field((type) => Float)
    EUR: number;

    @Field((type) => Float)
    NG: number;

    @Field((type) => Float)
    GH: number;

    @Field((type) => Float)
    KE: number;

    @Field((type) => Float)
    MW: number;

    @Field((type) => Float)
    RW: number;

    @Field((type) => Float)
    TZ: number;

    @Field((type) => Float)
    UG: number;

    @Field((type) => Float)
    ZA: number;
}
