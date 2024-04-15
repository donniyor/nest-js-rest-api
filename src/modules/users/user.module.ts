import {Module} from "@nestjs/common";
import {UserService} from "./user.service";
import {UserController} from "./user.controller";
import {DatabaseModule} from "../../common/database/database.module";
import {userProvider} from "../../common/database/models/users.model";

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [UserService, userProvider]
})
export class UserModule {
}