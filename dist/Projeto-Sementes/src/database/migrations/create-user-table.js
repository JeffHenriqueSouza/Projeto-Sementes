"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1621808656955 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserTable1621808656955 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name: "email",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "password",
                    type: "varchar"
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "cargo",
                    type: "varchar"
                },
                {
                    name: "createdAt",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updatedAt",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }
}
exports.CreateUserTable1621808656955 = CreateUserTable1621808656955;
//# sourceMappingURL=create-user-table.js.map