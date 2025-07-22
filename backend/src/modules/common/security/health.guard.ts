import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { FastifyRequest } from "fastify";
import { secrets } from "../model";

@Injectable()
export class HealthGuard implements CanActivate {
    public canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest<FastifyRequest>();
        return (
            request.headers.authorization === `Bearer ${secrets.HEALTH_TOKEN}`
        );
    }
}
