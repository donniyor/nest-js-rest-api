import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript"
import {ApiProperty} from "@nestjs/swagger";
import {Roles} from "./roles.model";

interface UserCreationAttribute {
    email: string
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttribute> {
    @ApiProperty({example: 1, description: 'Уникальный идетнификатор'})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number

    @ApiProperty({example: 'email@mail.ru', description: 'Электронная почта'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @ApiProperty({example: 'D%X$2da-#Dl*kf&', description: 'Пароль'})
    @Column({type: DataType.BOOLEAN, defaultValue: true})
    status: boolean

    @ApiProperty({example: true, description: 'Статус'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string

    @ForeignKey(() => Roles)
    @Column({type: DataType.INTEGER, allowNull: true})
    roleId: number
}

export const userProvider = {
    provide: 'USER_MODEL',
    useValue: User
}