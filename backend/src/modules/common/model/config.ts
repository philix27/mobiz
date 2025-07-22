export interface Config {
    readonly PORT: number;

    readonly API_PREFIX: string;

    readonly SWAGGER_ENABLE: number;

    readonly JWT_SECRET: string;
    readonly JWT_EXPIRES_IN: string;

    readonly JWT_ISSUER: string;

    readonly HEALTH_TOKEN: string;

    readonly PASSENGERS_ALLOWED: string;
    readonly PRIVY_APP_ID: string;
    readonly PRIVY_APP_SECRET: string;
    readonly PRIVY_AUTH_KEY: string;
    readonly RELOADLY_CLIENT_ID: string;
    readonly RELOADLY_CLIENT_SECRET: string;
    readonly RELOADLY_TOP_UP_ACCESS_TOKEN: string;
    readonly NODE_ENV: string;
    readonly EXCHANGE_RATE_KEY: string;
    readonly JWT_TELEGRAM_PUBLIC: string;
    readonly SELF_APP_SCOPE: string;
    readonly SELF_API_ENDPOINT: string;
}
