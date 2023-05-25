"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./module/app.module");
const swagger_builders_1 = require("./utils/swagger.builders");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    let document = swagger_1.SwaggerModule.createDocument(app, (0, swagger_builders_1.default)());
    swagger_1.SwaggerModule.setup('docs', app, document);
    app.enableCors();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map