import { Sequelize } from 'sequelize-typescript';
import { Product } from 'src/common/database/models/products.model';
import {Category} from "./models/category.models";
import {User} from "./models/users.model";

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: process.env.HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
            });
            sequelize.addModels([Product, Category, User]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
