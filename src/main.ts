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
    .setTitle('API Achados e Perdidos')
    .setDescription('Documentação da API para gerenciamento de documentos achados/perdidos')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // rota será /api

  // 🔹 Porta dinâmica (Render usa process.env.PORT) + 0.0.0.0
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 App rodando na porta ${port}`);
}
bootstrap();

