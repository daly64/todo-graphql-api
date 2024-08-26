import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'stream/consumers';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{bodyParser: true});

   app.enableCors();

  await app.listen(3000);
}
bootstrap();
