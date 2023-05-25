import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './module/app.module';
import swaggerBuilders from './utils/swagger.builders';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  let document = SwaggerModule.createDocument(app, swaggerBuilders());
  SwaggerModule.setup('docs', app, document);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
