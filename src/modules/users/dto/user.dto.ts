import {ApiProperty} from "@nestjs/swagger";

export class UserDto {

    @ApiProperty({example: 'email@mail.ru', description: 'Электронная почта'})
    readonly email: string

    @ApiProperty({example: 'D%X$2da-#Dl*kf&', description: 'Пароль'})
    readonly password: string
}