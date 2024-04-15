import {Inject, Injectable} from "@nestjs/common";
import {userProvider} from "../../common/database/models/users.model";
import {UserDto} from "./dto/user.dto";

@Injectable()
export class UserService {

    constructor(@Inject(userProvider.provide) private userStorage: typeof userProvider.useValue) {}

    async create(dto: UserDto) {
       return await this.userStorage.create(dto)
    }
    async find(){
        return await this.userStorage.findAll()
    }
}