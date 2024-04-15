import {Column, DataType, Model, Table} from "sequelize-typescript"

interface RoleCreationAttribute {
    role: string
}

@Table({ tableName: 'roles' })
export class Roles extends Model<Roles, RoleCreationAttribute> {

    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
    id: number

    @Column({ type: DataType.STRING, allowNull: false, unique: true })
    role: string
}
export const rolesProvider = {
    provide: 'ROLES_MODEL',
    useValue: Roles
}
