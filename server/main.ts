import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as config from 'config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  const options = new DocumentBuilder()
      .setTitle('Node Spider Doc')
      .setDescription('The Spider API Description')
      .setVersion('1.0')
      .addTag('Spider')
      .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);

  await app.listen(config.port);
}
bootstrap();
