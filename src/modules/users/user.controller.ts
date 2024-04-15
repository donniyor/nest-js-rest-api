import {UserService} from "./user.service";
import {Body, Controller, Get, Post} from "@nestjs/common";
import {UserDto} from "./dto/user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "../../common/database/models/users.model";

@ApiTags('Пользователи')
@Controller('users')
export class UserController {
    constructor(private service: UserService) {
    }

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() dto: UserDto) {
        return this.service.create(dto)
    }
    @ApiOperation({summary: 'Получение пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    find() {
        return this.service.find()
    }
}