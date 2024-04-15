import { Model, Column, DataType, Table } from "sequelize-typescript"
import {ApiProperty} from "@nestjs/swagger";

interface ProductCreationAttribute {
    title: string
    price: number
}
@Table({ tableName: 'products' })
export class Product extends Model<Product, ProductCreationAttribute> {

    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
    id: number

    @Column({ type: DataType.STRING, allowNull: false})
    title: string

    @Column({ type: DataType.INTEGER, allowNull: false})
    price: number

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true})
    status: boolean
}

export const productProvider = {
    provide: 'PRODUCT_MODEL',
    useValue: Product
}