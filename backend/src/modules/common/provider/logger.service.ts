import * as winston from 'winston';
import { secrets } from '../model';

export class LoggerService {
    private readonly instance: winston.Logger;

    public constructor() {
        const format = this.isProductionEnv()
            ? winston.format.combine(
                  winston.format.timestamp(),
                  winston.format.json(),
              )
            : winston.format.combine(
                  winston.format.colorize(),
                  winston.format.simple(),
              );

        this.instance = winston.createLogger({
            level: 'info',
            silent: this.isTestEnv(),
            format,
            transports: [
                new winston.transports.Console({
                    stderrLevels: ['error'],
                }),
            ],
        });
    }

    public info(message: string) {
        this.instance.info(message);
    }

    public error(message: string) {
        this.instance.error(message);
    }

    private isTestEnv(): boolean {
        return secrets.NODE_ENV === 'test';
    }

    private isProductionEnv(): boolean {
        return (
            secrets.NODE_ENV === 'production' || secrets.NODE_ENV === 'staging'
        );
    }
}
