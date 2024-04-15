import { Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsModule } from './modules/products/products.module';
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from './common/database/database.module';
import { CategoryModule } from './modules/category/category.module';
import {UserModule} from "./modules/users/user.module";
import { RolesModule } from './roles/roles.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [],
            autoLoadModels: true,
        }),
        DatabaseModule,
        ProductsModule,
        CategoryModule,
        UserModule,
        RolesModule,
    ],
})
export class AppModule 
{

}