import {Module} from "@nestjs/common";
import {UserService} from "./user.service";
import {UserController} from "./user.controller";
import {DatabaseModule} from "../../common/database/database.module";
import {User, userProvider} from "../../common/database/models/users.model";
import {Roles, rolesProvider} from "../../common/database/models/roles.model";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
    imports: [DatabaseModule, SequelizeModule.forFeature([User, Roles])],
    controllers: [UserController],
    providers: [UserService, userProvider, rolesProvider]
})
export class UserModule {
}