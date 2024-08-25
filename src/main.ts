import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activer CORS avec des options par défaut
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
