import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: any = new DocumentBuilder()
    .setTitle('User management system')
    .setDescription(
      'This is the official User management API document for skye wallet assessment',
    )
    .setVersion('1.0.0')
    .addServer('http://localhost:8000/v1/api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.setGlobalPrefix('v1/api');
  app.enableCors({ allowedHeaders: '*', origin: '*' });
  await app.listen(8000);
}
bootstrap();
