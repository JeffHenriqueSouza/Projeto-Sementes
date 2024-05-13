"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
async function bootstrap() {
    const connection = await (0, typeorm_1.createConnection)();
    await connection.runMigrations();
    await connection.close();
    dotenv.config();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
}
bootstrap().then(() => {
    console.log('Application is running on http://localhost:3000');
}).catch(error => {
    console.error('Error starting the application', error);
});
//# sourceMappingURL=main.js.map