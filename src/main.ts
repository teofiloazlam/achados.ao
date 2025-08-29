import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🔹 Pipes globais (validação)
  app.useGlobalPipes(new ValidationPipe());

  // 🔹 Configuração Swagger
  const config = new DocumentBuilder()
    .setTitle('API Achados e Perdidos') // título da documentação
    .setDescription('Documentação da API para gerenciamento de documentos achados/perdidos') // descrição
    .setVersion('1.0') // versão
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // rota será /api

  // 🔹 Porta dinâmica (Render usa process.env.PORT)
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
