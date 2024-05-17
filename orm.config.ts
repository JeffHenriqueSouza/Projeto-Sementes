import { join } from "path";
import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: 'postgres',
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],  
        migrations: [join(__dirname, '/../database/migrations/*{.ts,.js}')],
        synchronize: true,
        logging: true,
})