import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import {Roles, rolesProvider} from "../../common/database/models/roles.model";
import {DatabaseModule} from "../../common/database/database.module";
import {User, userProvider} from "../../common/database/models/users.model";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
  imports: [DatabaseModule, SequelizeModule.forFeature([User, Roles])],
  controllers: [RolesController],
  providers: [RolesService, rolesProvider, userProvider]
})
export class RolesModule {}