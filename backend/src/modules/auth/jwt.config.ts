import { registerAs } from "@nestjs/config";
import { JwtModuleOptions } from "@nestjs/jwt";
import { secrets } from "../common";

export default registerAs(
    "jwt",
    (): JwtModuleOptions => ({
        secret: secrets.JWT_SECRET,
        signOptions: {
            expiresIn: secrets.JWT_EXPIRES_IN,
        },
    })
);
