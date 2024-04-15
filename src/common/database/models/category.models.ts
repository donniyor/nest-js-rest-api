import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CategoryCreationAttribute {
    title: string
}

@Table({ tableName: 'category' })
export class Category extends Model<Category, CategoryCreationAttribute> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true, unique: true })
    id: number

    @Column({ type: DataType.STRING, allowNull: false })
    title: string

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
    status: boolean
}

export const categoryProvider = {
    provide: 'CATEGORY_MODEL',
    useValue: Category
}