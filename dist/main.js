"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const config = require("config");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.enableCors();
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Node Spider Doc')
        .setDescription('The Spider API Description')
        .setVersion('1.0')
        .addTag('Spider')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('doc', app, document);
    await app.listen(config.port);
}
bootstrap();
//# sourceMappingURL=main.js.map