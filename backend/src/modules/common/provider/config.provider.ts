import * as Joi from "joi";

import { Service } from "../../tokens";
import { Config } from "../model";

export const configProvider = {
    provide: Service.CONFIG,
    useFactory: (): Config => {
        const env = process.env;
        const validationSchema = Joi.object<Config>()
            .unknown()
            .keys({
                PORT: Joi.number().required(),
                API_PREFIX: Joi.string().required(),
                SWAGGER_ENABLE: Joi.number().required(),
                JWT_SECRET: Joi.string().required(),
                JWT_ISSUER: Joi.string().required(),
                HEALTH_TOKEN: Joi.string().required(),
                PASSENGERS_ALLOWED: Joi.string().valid("yes", "no").required(),
                PRIVY_AUTH_KEY: Joi.string().required(),
                PRIVY_APP_SECRET: Joi.string().required(),
                PRIVY_APP_ID: Joi.string().required(),
                JWT_EXPIRES_IN: Joi.string().required(),
                RELOADLY_CLIENT_ID: Joi.string().required(),
                RELOADLY_CLIENT_SECRET: Joi.string().required(),
                NODE_ENV: Joi.string().required(),
                EXCHANGE_RATE_KEY: Joi.string().required(),
                JWT_TELEGRAM_PUBLIC: Joi.string().required(),
            });

        const result = validationSchema.validate(env);
        if (result.error) {
            throw new Error(`Configuration not valid: ${result.error.message}`);
        }

        return result.value;
    },
};
