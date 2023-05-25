"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
exports.default = () => {
    return new swagger_1.DocumentBuilder()
        .setTitle('Demo API')
        .setDescription('A Demo API with CRUD functionality')
        .setVersion('1.0')
        .build();
};
//# sourceMappingURL=swagger.builders.js.map