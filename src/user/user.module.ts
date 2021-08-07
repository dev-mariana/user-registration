import { Module } from "@nestjs/common";
import { IsUserAlreadyExistsConstraint } from "./is-user-already-exists";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService, IsUserAlreadyExistsConstraint],
})
export class UserModule {}