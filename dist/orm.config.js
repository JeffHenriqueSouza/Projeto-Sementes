"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const path_1 = require("path");
const typeorm_1 = require("typeorm");
exports.dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [(0, path_1.join)(__dirname, '/../**/*.entity{.ts,.js}')],
    migrations: [(0, path_1.join)(__dirname, '/../database/migrations/*{.ts,.js}')],
    synchronize: true,
    logging: true,
});
//# sourceMappingURL=orm.config.js.map